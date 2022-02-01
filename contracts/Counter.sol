//  *********   increment and decrement program using solidity  *********

// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Counter {
    uint public count;

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        count -= 1;
    }
}
