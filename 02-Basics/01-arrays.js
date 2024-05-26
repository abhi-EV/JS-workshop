let arr = [1,2,3,4,5,6];
let myMovieLang = ["kannada","hindi","english"];
const myArr = new Array("abhi","kailash","Girish");
// console.log(arr[0]);
// console.log(arr[1]);


                    /* Array Methods */
/*
    1.length              16.indexOf
    2.toString            17.lastIndexOf
    3.at                  18.includes
    4.join                19.find
    5.pop                 20.findIndex
    6.push                21.findLast
    7.shift               22.findLastIndex   
    8.unshift             23.sort
    9.delete              24.reverse
    10.concat             25.toSorted
    11.copyWithin         26.toReversec
    12.flat               27.forEach
    13.splice             28.map
    14.tospliced          29.filter
    15.slice              30.flatMap
    31.reduce             32.reduceRight
    33.reduceRight        34.every
    35.some               36.from
    37.keys               38.entries
    39.with               40.spread,isArray,of
*/

/*      length           */
// console.log(arr.length);

/*      toString          */
// console.log(arr.toString());

/*        at             */
// console.log(arr.at(2));

/*      join  => it converts array to string , same as we seen in string where split will convert string to array     */
// console.log(myMovieLang.join(" / "));

/*     pop   => it gives o/p of removed value and the original array will get modified   */
// console.log(arr.pop());//o/p   6
// console.log(arr);  // o/p     [1,2,3,4,5]

/*   push => add new element to the end and return the length not the array or the value which pushed and modifies the array */
// console.log(arr.push(8)); // o/p 7 length
// console.log(arr); // [1, 2, 3, 4,5,6,7,8]
// console.log(myMovieLang.push("telgus")); // length 4
// console.log(myMovieLang); // [ 'kannada', 'hindi', 'english', 'telgus' ] 

/*      shift =>method removes the first array element and "shifts" all other elements to a lower index.it gives o/p shifted value  modifies original arr*/
// console.log(arr.shift());//1
// console.log(arr); // [2,3,4,5,6]

/* unshift =>method adds a new element to an array (at the beginning), and "unshifts" older elements o/p will be the length of the array */
// console.log(arr.unshift()); // 6 length
// console.log(arr.unshift(1)); // 7 length
// console.log(arr.unshift(2,4,5,"4")); // 11 length
// console.log(arr); // modified array [2,4,5,'4',1,1,2,3,4,5,6] 

/* delete => delete no longer used insted that use pop or shift */

/*concat => method creates a new array by merging (concatenating) existing arrays it wont modifies main array The concat() method can take any number of array arguments The concat() method can also take strings as arguments:*/
// console.log(arr.concat(myMovieLang)); // o/p [ 1, 2, 3, 4, 5, 6, 'kannada', 'hindi', 'english' ]
// console.log(arr,myArr);// o/p [ 1, 2, 3, 4, 5, 6 ] [ 'abhi', 'kailash', 'Girish' ]
// console.log(myMovieLang.concat("telgu"));// o/p  ['kannada', 'hindi', 'english', 'telgu']

/*copyWithin => method copies array elements to another position in an array: bellow example */
// console.log(myMovieLang.copyWithin(1,0));

/* flat=> method creates a new array with sub-array elements concatenated to a specified depth. */
/*
let myNewArr = [[1,2],[3,4],[5,6]];
console.log(myNewArr.flat());//[1,2,3,4,5,6]
let myNewArr2 = [0,1,2,[4,5,[6,7,[8,9]]]];
console.log(myNewArr2.flat(1));// o/p [ 0, 1, 2, 4, 5, [ 6, 7, [ 8, 9 ] ] ]
console.log(myNewArr2,flat(2));// o/p [ 0, 1, 2, 4, 5, 6, 7, [ 8, 9 ] ]
console.log(myNewArr2.flat(Infinity));// o/p [0,1,2,4,5,6,7,8,9]
*/

/* splice =>  method can be used to add new items to an array  modifies original array  */
// console.log(myArr.splice(1,2));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.splice(2, 0));

/*toSpliced => The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array. */

/* slice => it gives portion of the i/p sliced part it doest modify the original array*/
// console.log(arr.slice(1,3));
// console.log(arr);

let combine = arr.concat(myMovieLang,myArr);
// console.log(typeof combine);
// or we can use spread operator
// console.log(...arr,...myArr,...myMovieLang);

// let score1 = 100;
// let score2 = 100;
// let score3 = 100;
// let upd = Array.of(score1,score2,score3);
// console.log(typeof upd);
// console.log(typeof score1);
