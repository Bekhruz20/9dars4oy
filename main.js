let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];
let wordsWithN = [];
let wordsWithoutN = [];

console.log(letterSearch);

letterSearch.forEach(word => {
    if (word.toLowerCase().includes('н')) {
        wordsWithN.push(word);
    } else {
        wordsWithoutN.push(word);
    }
});

console.log("Слова с буквой 'н':", wordsWithN);
console.log("Слова без буквы 'н':", wordsWithoutN);

// const arr=['BMW', 'MERS', 'MClaren', 'Ford-Mustang', 'Audi']
// const num=[2,-6,7,9,8,3,4]

// console.log(arr)
// arr.sort
// console.log(arr)
// console.log(num)
// num.sort
// console.log(num)

// console.log(arr)
// arr.reverse()
// // console.log(arr)
// console.log(num)
// num.reverse
// console.log(num)

// console.log(arr)
// let a = arr.splice(1,2)
// console.log(a)
// arr.splice(1,2,"laceti","cobalt")
// console.log(arr)

// let jony = arr.jony('+')
// console.log(jony)


// console.log(arr)
// for (const element of arr) {
//     console.log(element);
// }

// let a=10
// let b=20
// for(let i=a;  i<=b;  i++) {
//         console.log(i);
//     }