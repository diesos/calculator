document.querySelector('#validate').addEventListener('click', run)
document.querySelector('#mvalidate').addEventListener('click', multiplys)
document.querySelector('#dvalidate').addEventListener('click', divides)

//create a function that adds two numbers and alerts the sum
function run() {
    let value1 = document.querySelector('#value1').value
    let value2 = document.querySelector('#value2').value
    let result = Number(value1) + Number(value2)
    document.querySelector('#resultA').innerText = result
}
//create a function that multiplys three numbers and console logs the product

function multiplys() {
    let m1 = document.querySelector('#m1').value
    let m2 = document.querySelector('#m2').value
    if
        (m1 === NaN && m2 === NaN)
        document.querySelector('#resultM').innerText = Error



    else {
        let result = Number(m1) * Number(m2)
        document.querySelector('#resultM').innerText = result
    }

}
//create a function that divides two numbers and returns the ???
function divides() {
    let d1 = document.querySelector('#d1').value
    let d2 = document.querySelector('#d2').value
    let result = Number(d1) / Number(d2)
    document.querySelector('#resultD').innerText = result
}