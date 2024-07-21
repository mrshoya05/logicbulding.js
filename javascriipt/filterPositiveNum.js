function filterPositiveNum(arr){
    return arr.filter(function(num){
        return num >0
    })
}

const numList = [3,4,-4,44,-77,-44,77,88,463]
const positiveNumList = filterPositiveNum(numList)
console.log(positiveNumList);