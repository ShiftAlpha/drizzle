//javascript file to test string store
const StringStore = artifacts.require("./StringStore.sol");

contract("StringStore", accounts => {
    it("Stores the string 'hello'", async () =>{
        const myStringStore = await StringStore.deployed();
        //set string var
        await myStringStore.set("Hey !", { from: accounts[0] });
        //get string var from public variable - StringStore class
        const storedStr = await StringStore.myString.call();

        assert.equal(storedStr, "Hey!", "String not stored");
    });
});