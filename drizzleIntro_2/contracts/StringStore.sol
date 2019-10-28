//writing a string to store
pragma solidity ^0.5.0;

contract StringStore{
    string public myString = "Hello";
    //set function
    function set(string memory x) public {
        myString = x;
    }
}
