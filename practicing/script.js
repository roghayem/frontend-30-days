
function addNum(numbers){
    const total = numbers.reduce(function(sum , number){
         return sum+number;
    },0);
    return total
}
console.log(addNum([1,2,3,4,5,6]));



function revers(fuctions){
    const revers = [...fuctions].reverse()
    return revers
}
console.log(revers(["apple","banana","cucumber"]));



function evenNum(evennumber){
    const even = evennumber.filter(function(number){
        return number%2=== 0;
    })
    return even
}
console.log(evenNum([1,2,3,4,5,6,7,8,9,10]));

function reveredString(string){
   return string.split("").reverse().join("");
}
console.log(reveredString("hello"))