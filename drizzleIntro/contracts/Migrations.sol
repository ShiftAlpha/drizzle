pragma solidity >=0.4.21 <0.6.0;
//contract migrations
contract Migrations {
  //variables
  //address owner variable
  address public owner;
  //u-integer to track last completred migration
  uint public last_completed_migration;

  //constructor
  constructor() public {
    //sender assigned to owner
    owner = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }
  //function to set if completed
  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
  //function to upgrade
  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
