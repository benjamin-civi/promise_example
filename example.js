const promOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("hello, here's from a successful promise fulfilment")
    }, 3000)
})

const promTwo = new Promise ((resolve, reject)=>{
    reject("I dont feel like it")
})

async function myAsyncFunc(){
    await promOne.then((response)=>{
        console.log(String(response).toUpperCase()) // so we can differentiate btwn the const and the function
    })
}

/** Driver */
promOne.then((response)=>{
    console.log(response)
})
// > "hello, here's from a successful promise fulfilment"

promTwo.catch((err)=>{
    console.log(err)
})
// > "I don't feel like it"

myAsyncFunc();
// > "HELLO, HERE'S FROM A SUCCESSFUL PROMISE FULFILMENT"
