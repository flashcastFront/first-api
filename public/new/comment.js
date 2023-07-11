export class Comment {
    #name = '';

    constructor(text) {
        this.text = text;
        this.votesQty = 0;
        this.#name = 'another private field';
    }

    upvote() {
        return this.votesQty += 1;
    }

    test() {
        console.log('dwwd')
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

// die Index finden die zusammen eine 8 zurückgeben
function findSumPair(numbers, sum) {
    let nums = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // console.log(numbers[i], numbers[j]);
            if (numbers[i] + numbers[j] === sum) {
                nums.push(numbers[i], numbers[j]);
            }
        }
    }
    return nums;
}
let a = [1, 4, 6, 3, 5];
let result = findSumPair(a, 8);
// console.log(result);

// ANDERE LÖSUNG  mit hachTable
function findSumPair2(arr, targetSum) {
    let pairs = [];
    let hashTable = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = targetSum - arr[i];

        if (hashTable[complement]) {

            pairs.push(arr[i], complement);
        }

        hashTable[arr[i]] = true;
    }
    return pairs;
}

let a2 = [1, 4, 6, 3, 5];
let targetSum2 = 8;
let result2 = findSumPair2(a2, targetSum2);

// console.log(result2);


