// Promesas

/*
const fs = require('fs').promises

fs.readFile('1.txt')
    .then((data) =>{
        console.log(data.toString())
        return fs.readFile('2.txt')
    })
    .then((data) => {
        console.log(data.toString())
        return fs.readFile('3.txt')
    })
    .then((data) => {
        console.log(data.toString())
    })

*/


// ASYNC / AWAYT

const fs = require('fs').promises

async function fn() {
    let data;
    data = await fs.readFile('1.txt')
    console.log(data.toString())

    data = await fs.readFile('2.txt')
    console.log(data.toString())

    data = await fs.readFile('3.txt')
    console.log(data.toString())
}

fn()

