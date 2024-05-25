let uName = "Abhishek ";
let uName2 = "Aevk "
let rollNo = 1;
const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(uName+ " " +rollNo);
/*
    console.log(`The Student name is ${uName} and RollNumber is ${rollNo}`);
*/

//            string Methods/function
/*      
            ***Most used ***

        1. length
        2.at it is also used in arrays
        3.charAt
        4.concat
        5.endsWith
        6.includes
        7.indexOf
        8.lastIndexOf
        9.localCompare
        10.repeat
        11.replace
        12.slice
        13.split
        14.startsWith
        15.substr // deprecated not used in new websites
        16.substring
        17.toLocaleLowerCase
        18.toLocaleUpperCase
        19.toLOwercase
        20.toUpperCase
        21.toString
        22.trim
        23.trimEnd
        24.trimStart
        25.valueOf
*/

 /*//      length => gives the length of string
    console.log(uName.length);//8
*/
// ***************************************
/*
// *at(num)* => method give the alphabet present at that index ex given bellwo, which can take both +ve as well -ve integer values it not follow zero based index

console.log(uName.at(2)); //h
console.log(uName.at(-2)); // e
*/
// ****************************************

/* charAt(number) => method it follow zero based index takes +ve integers only
    console.log(uName.charAt(5));//h
*/

/* concat(str,str) => method used to add to string merge strings 
    console.log(uName.concat(" " ,uName2));//Abhishek Aevk
*/

/* endsWith(searchString,endPosition) => methode takes two input word or alphabet and the number at which it is ending character and number provied should be correct o/p will be true or else it will be false examples bellow
end position is optional

console.log(uName.endsWith("ek",8));//true
console.log(uName.endsWith("e"));//false
*/

/* includes(string) => The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.

console.log(`the given word ${sentence.includes("brown") ? "is" :"isNot" } in the sentence`); 

console.log(sentence.includes("dog"));//true

*/

/* indexOf(string) => The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const searchTerm = 'dog';
for first occorance
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.indexOf("dog"));

for second occorance
let secondOc = paragraph.indexOf("dog");
console.log(paragraph.indexOf("dog",secondOc+1));
 */

/* lastIndexOf(string)=>The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.
 
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.lastIndexOf("dog"));
*/

/* repeat(num)=> The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

console.log(uName2.repeat(2));
if we give 0 as repeat we get empty string
*/

/* replace("string")=> The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's","my"));

*/

/* slice()=>The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.

syntax
slice(indexStart)
slice(indexStart, indexEnd)



*/
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.slice(15));
console.log(paragraph.slice(15,28));
console.log(uName.slice(-8,5));

/* split()=>The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

syntax
split(separator)
split(separator, limit)

const paragraph = "I think Ruth's dog is cuter than your dog!";

let newStr = paragraph.split(" ");
console.log(newStr[0]);
console.log(newStr[5]);
console.log(paragraph);
*/

/* startsWith()=> The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.

syntax
startsWith(searchString)
startsWith(searchString, position) indexing happen here

const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat')); // true
console.log(str1.startsWith('a', 3));//false
*/

/* subString()=>The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

syntax
substring(indexStart)
substring(indexStart, indexEnd)

const str = 'Mozilla';
console.log(str.substring(1, 3));//oz
console.log(str.substring(2));//zilla
*/

/* tolowerCase convert given string para to lower case and toUppdercase convert given word or para to upperCase
*/

/* toString()=>The toString() method of String values returns this string value. and valueOf both works similar almost

let arr = [1,2,3,4,"abhi"];
let str = arr.toString(); // coverts to array to string
console.log( str);// 1,2,3,abhi
*/
 
/* trim()=>The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string

To return a new string with whitespace trimmed from just one end, use *trimStart()* or *trimEnd()*.

const greeting = '   Hello world!   ';
console.log(greeting); // '   Hello world!   '
console.log(greeting.trim());//"hello world!"
console.log(greeting.trimStart());//'Hello world!   '
console.log(greeting.trimEnd());//'   Hello world!'
*/