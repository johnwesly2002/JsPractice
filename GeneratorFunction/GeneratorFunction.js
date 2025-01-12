//Basic Generator Function to get the range numbers from start to end


function* range(start,end){
    for(let i = start; i <= end; i++){
        yield i;
    }
}

const numbers = range(1,5);
// for(let num of numbers){
//     console.log(num);
// }


//create a fabinocci series using generator function


function* fabinocci(range){
    let [a,b] = [0,1];
    for(let i = 0; i <= range;i++){
        yield a;
        [a,b] = [b, a+b];
    }
}

const fib = fabinocci(6);
// for(let num of fib){
//     console.log(num);
// }


//create a infinite number loop

function* infinite(){
    let i = 1;
    while(true){
        yield i++;
    }
}

const gen = infinite();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


//Prime Numbers

function* prime(limit){
    let num = 2;
    while(num <= limit){
        if(isPrime(num)){
            yield num;
        }
        num++;
    }
}

function isPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
}

const primes = prime(20);
for(let p of primes){
    console.log(p);
}

//laxyLoader for with generator functions
function* lazyDataLoader() {
    yield new Promise(resolve => setTimeout(() => resolve("Chunk 1"), 1000));
    yield new Promise(resolve => setTimeout(() => resolve("Chunk 2"), 1000));
    yield new Promise(resolve => setTimeout(() => resolve("Chunk 3"), 1000));
}

const dataLoader = lazyDataLoader();
dataLoader.next().value.then(data => console.log(data)); // "Chunk 1"
dataLoader.next().value.then(data => console.log(data)); // "Chunk 2"
dataLoader.next().value.then(data => console.log(data)); // "Chunk 3"
