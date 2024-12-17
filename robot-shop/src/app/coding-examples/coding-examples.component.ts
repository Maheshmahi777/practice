import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-examples',
  templateUrl: './coding-examples.component.html',
  styleUrls: ['./coding-examples.component.css'],
})
export class CodingExamplesComponent implements OnInit {
  ngOnInit(): void {
    // 1)  Duplicate or Repetitive Characters in a string in Array
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

    // 2)  palindrome string example

    function palindromeString(palindromeString: string) {
      let reversedString = palindromeString.split('').reverse().join('');

      if (reversedString === palindromeString) {
        console.log('Given string is a palindrome');
      } else {
        console.log('Given String is not a palindrome');
      }
    }
    palindromeString('radar');

    // Another way or cleaner way that ignores spaces and special characters

    function isPalindrome(str: string): boolean {
      // Remove non-alphanumeric characters and convert to lowercase
      const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

      // Reverse the string
      const reversedStr = cleanStr.split('').reverse().join('');

      // Check if the original string is the same as the reversed one
      return cleanStr === reversedStr;
    }

    let result = isPalindrome('A man, a plan, a canal, Panama');
    console.log(result);

    // 3) Program to Title Case given String

    function toTitleCase(input: string) {
      // Split the string into words
      return str
        .split(' ') // Split by spaces into an array of words
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize first letter, lower case the rest
        )
        .join(' '); // Join the array of words back into a string
    }

    // Example usage:
    let input = 'hello world from javascript';
    let titleCased = toTitleCase(input);
    console.log(titleCased); // Output: "Hello World From Javascript"

    // Program to Title Case given String

    // 4) Longest word from a given string
    let string = 'ab abc abcd abcde programming abcdef abcdefgh';
    let words;
    let longest = '';

    words = string.split(' ');
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    console.log('Longest word is:', longest);

    // Longest word from a given string

    // Second longest word from a given string modify for loop as below
    // Add another variable
    let secondLongest = '';
    for (let word of words) {
      if (word.length > longest.length) {
        secondLongest = longest;
        longest = word;
      } else if (word.length > secondLongest.length && word !== longest) {
        secondLongest = word;
      }
      console.log('Second longest word is:', secondLongest);
    }
  }
}
