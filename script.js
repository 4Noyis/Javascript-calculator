
/* */



let firstOperand=''
let secondOperand=''
let currentOperation=null
let result=0;
let shouldResetScreen =false

const screen=document.querySelector(".screen")
const numberButtons = document.querySelectorAll(".btn-num") // foreach ile diğer elemanlara ulaşcaz
const operatorsButtons = document.querySelectorAll(".btn-operator")
const equalButton= document.querySelector(".btn-equal")
const clearButton=document.querySelector(".btn-clear")
const deleteButton=document.querySelector(".btn-delete")
const pointButton=document.querySelector(".btn-point")

equalButton.addEventListener("click",()=>evaluate())
clearButton.addEventListener("click",()=>clear())
deleteButton.addEventListener("click",()=>deleteNumber())
pointButton.addEventListener("click",()=>appendPoint())

numberButtons.forEach((button)=>
    button.addEventListener('click',()=>appendNumber(button.textContent))    
)
operatorsButtons.forEach((button)=>
    button.addEventListener('click',()=>appendOperator(button.textContent))
)

// Kullanıcı sayı seçtiğinde ekranı günceller
function appendNumber(number){
    if(screen.textContent==="0" || shouldResetScreen){
        resetScreen()
    } 
    screen.textContent+=number
    
}

// Ekranı sıfırla
function resetScreen(){
    screen.textContent=""
    shouldResetScreen=false
}

// Ekranı ve değişkenleri sıfırlar
function clear(){
    screen.textContent="0";
    firstOperand=""
    secondOperand=""
    currentOperation= null
}

// nokta ekleme
function appendPoint(){
    if(shouldResetScreen){
        resetScreen()
    }
    if(screen.textContent ===""){
        screen.textContent="0"
    }if(screen.textContent.includes(".")){
        return
    }
    screen.textContent+="."
}

// son rakamı siler
function deleteNumber(){
    screen.textContent=screen.textContent.toString().slice(0,-1)
}

// İşlem seçtiğinde ekranı günceller ve sonraki girilecek sayılar için ekranı sıfırlar
function appendOperator(operator){
    if(currentOperation !==null){
        evaluate();
    } 
    firstOperand=screen.textContent
    currentOperation=operator
    shouldResetScreen= true
}

// İşlem tamamlandığında çağrılır. İlgili işlem fonksiyonunu(oparete) çağırır ve sonucu ekrana yazar
function evaluate(){
    if(currentOperation ===null||shouldResetScreen){
        return
    }
    if(currentOperation === "/" && screen.textContent==="0"){
        alert("can't divide by 0")
        clear()
        return
    }
    secondOperand=screen.textContent;
    screen.textContent= roundResult(
        operate (currentOperation, firstOperand, secondOperand)
    )
    currentOperation= null
}

//sonuçların 3 ondalık basamağa yuvarlanmasını sağlar
function roundResult(number){
    return Math.round(number*1000)/1000;
}

// matematiksel işlemler
function add(x,y){
    return x+y
}
function subtract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}


// iki sayıyı ve operatörü alır yukardaki matematiksel işlemlerden hangisi operatörler uyumluysa çağırır
function operate (operator, x, y){
    x=Number(x)
    y=Number(y)

    if(operator ==='+'){
        return add(x,y)
    }if(operator ==='-'){
        return subtract(x,y)
    }if(operator ==='*'){
        return multiply(x,y)
    }if(operator ==='/'){
        if(y===0){
            return null
        }else{
            return divide(x,y)
        }
    }

}


