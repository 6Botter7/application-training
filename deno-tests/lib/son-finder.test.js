import { assertEquals, beforeAll, describe, init, it } from "../dependencies.js";
import { findSon } from "../../lib/son-finder/son-finder.js";

const familyTree = {
    "id": "root",
    "value": 42,
    "description": "Root Object",
    "children": [
        {
            "id": "child1",
            "value": 17,
            "description": "First Child",
            "children": [
                {
                    "id": "grandchild1",
                    "value": 10,
                    "description": "First Grandchild"
                },
                {
                    "id": "grandchild2",
                    "value": 23,
                    "description": "Second Grandchild"
                }
            ]
        },
        {
            "id": "child2",
            "value": 56,
            "description": "Second Child"
        }
    ]
};

const familyTree2 = {
    "id": "level1",
    "value": 50,
    "description": "Level 1",
    "children": [
        {
            "id": "level2",
            "value": 25,
            "description": "Level 2",
            "children": [
                {
                    "id": "level3",
                    "value": 12,
                    "description": "Level 3",
                    "elements": [
                        {
                            "id": "level4",
                            "value": 6,
                            "description": "Level 4",
                            "elements": [
                                {
                                    "id": "level5",
                                    "value": 3,
                                    "description": "Level 5"
                                }
                            ]
                        },
                        {
                            "id": "level5",
                            "value": 3,
                            "description": "Level 777"
                        }
                    ]
                }
            ]
        }
    ]
};

describe("Son finder", () => {
    beforeAll(async () => {
        await init();
    });

    it("should find son with id 'grandchild2' and value '23'", async () => {
        const result = await findSon("grandchild2", 23, familyTree);

        assertEquals(result, [{"id": "grandchild2", "value": 23, "description": "Second Grandchild"}]);
    });

    it("should find son with id 'level5' and value '3'", async () => {
        const result = await findSon("level5", 3, familyTree2);

        assertEquals(result, [{"id": "level5", "value": 3, "description": "Level 5"}, {"id": "level5", "value": 3, "description": "Level 777"}]);
    });

    it("should return null if id  not exist", async () => {
        const result = await findSon( null,3, familyTree2);

        assertEquals(result, null);
    });

    it("should return null if value not exist", async () => {
        const result = await findSon("level5",null, familyTree2);

        assertEquals(result, null);
    });

    it("should return null if id and value not exist", async () => {
        const result = await findSon( null, null,familyTree2);

        assertEquals(result, null);
    });

    it("should return null familyTree not exist", async () => {
        const result = await findSon("level6", 4, null);

        assertEquals(result, null);
    });

});