import "./mocks/setup-mock.js";

export {
    assertEquals,
    assertStrictEquals,
    assertThrows,
    assertObjectMatch,
    assertNotEquals,
    assertArrayIncludes
} from "https://deno.land/std@0.182.0/testing/asserts.ts";
export {
    describe,
    it,
    beforeAll,
    afterAll,
    beforeEach,
    afterEach
} from "https://deno.land/std@0.182.0/testing/bdd.ts";

const init = async () => {
    const module = await import("./../packages/crs-framework/test/mockups/init.js");
    await module.init();
    window.location = {origin: ""};
    // const onKeyCoreModule = await import("./../bootstrap/boot-core-api.js");
    // await onKeyCoreModule.loadCoreApi();
}

export {init}
