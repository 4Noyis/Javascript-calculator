

let process="";
let num=0;
let firstNum=10
let secondNum=2
let result=0;

const zero=document.querySelector("#zero").addEventListener("click",()=> num=0)
const one= document.querySelector("#one").addEventListener("click",()=> num=1)
const two=document.querySelector("#two").addEventListener("click",()=> num=2)
const three=document.querySelector("#three").addEventListener("click",()=>num=3)
const four=document.querySelector("#four").addEventListener("click",()=> num=4)
const five=document.querySelector("#five").addEventListener("click",()=> num=5)
const six=document.querySelector("#six").addEventListener("click",()=> num=6)
const seven=document.querySelector("#seven").addEventListener("click",()=>num=7)
const eight=document.querySelector("#eight").addEventListener("click",()=>num=8)
const nine=document.querySelector("#nine").addEventListener("click",()=> num=9)
const equal=document.querySelector("#equal")

const plus=document.querySelector("#add").addEventListener("click",()=> process= "+")
const minus=document.querySelector("#subtract").addEventListener("click",()=> process= "-")
const cross=document.querySelector("#multiply").addEventListener("click",()=> process= "*")
const slash=document.querySelector("#divide").addEventListener("click",()=> process= "/")



let add = (x,y)=>{ 
    return x+y
}
let subtract = (x,y)=>{
    return x-y
}
let multiply = (x,y)=>{
    return x*y
}
let divide = (x,y)=>{
    return x/y
}


function operate(process){
    if(process==="+"){
        console.log(add(firstNum,secondNum));
    } if(process==="-"){
        console.log(subtract(firstNum,secondNum));
    } if(process==="*"){
        console.log(multiply(firstNum,secondNum));
    } if(process==="/"){
        console.log(divide(firstNum,secondNum));
    }
    
}



equal.addEventListener("click",()=> operate(process))

