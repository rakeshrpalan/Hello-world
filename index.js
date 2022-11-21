

let ready =true;

const checker = new Promise((res,rej) => {
    if (ready){
        const markReady = 'this is the result';
        res(markReady);
    } else{
        const markNot = 'still working on it ';
        res(markNot)
    }
});

console.log(checker);


const check1 = () =>{
    checker.then(val => {
        console.log(val);
    }) .catch(err => {
        console.log(err);
    })
}

check1();