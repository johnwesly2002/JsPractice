const arr = [1,2,3,4,[2,3],[3,4,5],[2,[3,4]]];
//Make it single array without Nested Arrays
const outputarr = [];
function flatArr(Arr){
    Arr.forEach((element) => {
        if(Array.isArray(element)){
            flatArr(element);
        }else{
        outputarr.push(element);
        }
    })
}
flatArr(arr);
console.log(outputarr);



//Find the duplicates in the arr
const duparr = [1,1,1,2,3,4,3,2,4,5,5,2,1,1,1];

const outArr = [];

duparr.forEach((element) => {
    if(!outArr[element]){
        outArr[element] = 1;
    }else{
        outArr[element]++;
    }
});

console.log(outArr);


//Fabinocci Series
const FabSeries = [];
function Fabinocci(n) {
    if( n <= 1){
        return n;
    }
    return Fabinocci(n-1) + Fabinocci(n-2);
}
console.log(Fabinocci(6));
console.log(FabSeries);

