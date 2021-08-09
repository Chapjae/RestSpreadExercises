const filterOutOdds = (...nums) => nums.filter(n => n % 2 === 0)

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2}) 

const doubleArgs = (arr, ...arg) => [...arr, ...arg.map(n => n *2)]