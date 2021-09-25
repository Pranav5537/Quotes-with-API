    //button id from html

document.getElementById("clik").addEventListener("click",quotes)


    //to diplay quote first instead of black box
function foo(){
    fetch("https://favqs.com/api/qotd")

    //print quotes in console 
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.quote.body)
        console.log(data.quote.author)

    //ceating p with javascript
    let p1=document.getElementById("one")
    let p2=document.getElementById("two")

    //injectiong quotes in para
    p1.innerText=data.quote.body
    p2.innerText=data.quote.author
    })

    // in case of any error occurs
    .catch((err)=>
    console.log(err,"unable to fetch data")) 
}
window.onload=foo()

//creating a new function in the name of predessor line (quotes) to display quotes periodically
function quotes(){

    fetch("https://favqs.com/api/qotd")

    //print quotes in console 
    .then((res)=> res.json())
    .then((data)=>{
        console.log(data.quote.body)
        console.log(data.quote.author)

    //creating p with javascript
    let p1=document.getElementById("one")
    let p2=document.getElementById("two")
    
    //injectiong quotes in para
    p1.innerText=data.quote.body
    p2.innerText=data.quote.author
    }
    )
// in case of any error occurs
    .catch((err)=>
    console.log(err,"unable to fetch data")) 
}
