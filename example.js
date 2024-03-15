const promOne = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("hello, here's from a successful promise fulfilment")
    }, 3000)
})

promOne.then((response)=>{
    console.log(response)
})

const promTwo = new Promise ((resolve, reject)=>{
    reject("I dont feel like it")
})

promTwo.catch((err)=>{
    console.log(err)
})

async function myAsyncFunc(){
    await promOne.then((response)=>{
        console.log(String(response).toUpperCase())
    })
}

myAsyncFunc();