//Memoization Function to get the Fabinocci

function memoize(fnc){
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)){
            console.log("Fetching from the cache");
            return cache.get(key);
        }
        const result = fnc(...args);
        console.log("Computing the result");
        cache.set(key,result);
        return result;
    }
}
function Fabinocci(n){
    if(n <= 1){
        return n;
    }
    return Fabinocci(n-1) + Fabinocci(n-2);
}


const MemoziationCache = memoize(Fabinocci);

console.log(MemoziationCache(8));
console.log(MemoziationCache(8));
console.log(MemoziationCache(9));
console.log(MemoziationCache(9));
