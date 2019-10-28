pragma solidity ^0.5.0;
//contract to greet
contract Greet {
    string greeting = "Hello ";
    //set function/method
    function set(string memory _greeting) public{
        greeting = _greeting;
    }
    //get function
    function get() public view returns (string memory){
        return greeting;
    }
}