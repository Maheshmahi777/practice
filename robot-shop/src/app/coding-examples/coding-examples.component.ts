import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-examples',
  templateUrl: './coding-examples.component.html',
  styleUrls: ['./coding-examples.component.css'],
})
export class CodingExamplesComponent implements OnInit {
  ngOnInit(): void {
    // Duplicate or Repetitive Characters in a string in Array
    // Expected output
    // Duplicate characters: [ 'r', 'g', 'm' ]

    let str = 'programming';

    //  Count the frequency of each character
    let charCount: any = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    //Find characters that appear more than once
    let repeatingCharactersArray = [];
    for (let char in charCount) {
      if (charCount[char] > 1) {
        repeatingCharactersArray.push(char);
      }
    }
    console.log('Repeating Character are ', repeatingCharactersArray);
  }
  // Duplicate or Repetitive Characters in a string in Array

  // To find unique characters from a given string changes if() condition like below
  // if (charCount[char] === 1) {
  //   repeatingCharactersArray.push(char);
  // }
  // Expected output
  // Unique characters : Unique characters: [ 'p', 'o', 'a', 'i', 'n' ]

  // Duplicate or Repetitive Characters in a string in Object
  // To print duplicate/repetitive characters from a string in the form of an object
  // step 1: Modify the variable let repeatingCharactersArray = [] to let repeatingCharactersObject = {};
  // step 2: Modify the second for loop as below

  //Find characters that appear more than once
  // let repeatingCharactersObject = {};
  // for (let char in charCount) {
  //   if (charCount[char] > 1) {
  //     repeatingCharactersObject[char] =  charCount[char];
  //   }
  // }
  // Expected output : Duplicate characters: { r: 2, g: 2, m: 2 }
}
