let sumArray = function(arr) {
    let total = 0
    for (let i = 0; i < arr.length - 1; i++){
        total += arr[i]
    }
    return total
}
console.log(sumArray([3, 4, 6, 10]))
console.log(sumArray([5, 7, 9]))