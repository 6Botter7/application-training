/**
 * @method findSon - finds objects with the given id and value within a nested structure of objects and arrays.
 * @description - This recursive method finds objects within nested structures based on a specified id and value.
 * @param id - the id of the son to find
 * @param value - the value of the son to find
 * @param familyTree - the nested structure of objects and arrays to search
 * @return {[object]}
 */
export async function findSon(id, value, familyTree) {
    const sons = [];

    if (id == null || value == null || familyTree == null) {
        return null;
    }


    if (typeof familyTree === 'object') {
        if (familyTree.id === id && familyTree.value === value) {
            sons.push(familyTree);
        }
        for (const key in familyTree) {
            const sonOfSons = await findSon(id, value, familyTree[key]);
            sons.push(...sonOfSons);
        }
    }

    return sons;
}
