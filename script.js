

let process="";
let num=0;
let firstNumArray=[]
let secondNum=2
let result=0;


const zero=document.querySelector("#zero").addEventListener("click",()=>firstNumArray.push(0) )
const one= document.querySelector("#one").addEventListener("click",()=>firstNumArray.push(1))
const two=document.querySelector("#two").addEventListener("click",()=>firstNumArray.push(2))
const three=document.querySelector("#three").addEventListener("click",()=>firstNumArray.push(3))
const four=document.querySelector("#four").addEventListener("click",()=>firstNumArray.push(4)) 
const five=document.querySelector("#five").addEventListener("click",()=>firstNumArray.push(5))
const six=document.querySelector("#six").addEventListener("click",()=>firstNumArray.push(6))
const seven=document.querySelector("#seven").addEventListener("click",()=>firstNumArray.push(7))
const eight=document.querySelector("#eight").addEventListener("click",()=>firstNumArray.push(8))
const nine=document.querySelector("#nine").addEventListener("click",()=>firstNumArray.push(9))
const equal=document.querySelector("#equal")

const plus=document.querySelector("#add").addEventListener("click",()=> process= "+")
const minus=document.querySelector("#subtract").addEventListener("click",()=> process= "-")
const cross=document.querySelector("#multiply").addEventListener("click",()=> process= "*")
const slash=document.querySelector("#divide").addEventListener("click",()=> process= "/")

// seçilen sayıları tek tek bi array içine atıp daha sonra elemalara ulaşarak işlem yapsak?

// ilk sayı seçilip process seçildiğinde 2. sayıyı seçmmek lazım 
// while döngüsüyle bakılabilir sayılar bi listede toplanır ve ilk rakam oluşur
// eğer process seçildiyse ikinci sayı için bir liste oluşturmaya başlanır



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
for (let i = 0; i < firstNumArray.length; i++) {
    const element = firstNumArray[i];
    
    
}


equal.addEventListener("click",()=> console.log(firstNumArray))

