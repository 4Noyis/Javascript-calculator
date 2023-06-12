

/* 

    Dom ile tıklanan butonların numarasına göre bir değişkene string olarak ekledik bu stringi
int değere dönüştür gerek olursa işlem yapmak için
    Eğer işlem butonlarından birine tıklanırsa 2.sayı listesine atılır bir sonraki seçilen sayılar
bu işlemleri bir function içinde tanımla.

parseInt() -> string değer integer'a dönüştürülebilir

    Tıklanan butonun textContentini ilk değişkene += ile eklersek birleşir mi?
butonların hepsini tek bir class olarak birleşitr idlerini değiştir ve tıklandığında üstte yazan
fonksiyona değerini gönderip ilk sayıyı oluştur

    Bölümde ikinci sayı sıfır olursa hata değeri döndür

while döngüsüyle bakılabilir sayılar bi listede toplanır ve ilk rakam oluşur
eğer process seçildiyse ikinci sayı için bir liste oluşturmaya başlanır

    herhangi bir işlem butonuna tıklandığı zaman current num değerini başka bir değişkene geçirip
yenisini currentNuma yazdır ?

*/



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


function appendNumber(number){
    if(screen.textContent==="0" || shouldResetScreen){
        resetScreen()
    } 
    screen.textContent+=number
    
}
function resetScreen(){
    screen.textContent=""
    shouldResetScreen=false
}

function clear(){
    screen.textContent="0";
    firstOperand=""
    secondOperand=""
    currentOperation= null
}

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

function deleteNumber(){
    screen.textContent=screen.textContent.toString().slice(0,-1)
}

function appendOperator(operator){
    if(currentOperation !==null){
        evaluate();
    } 
    firstOperand=screen.textContent
    currentOperation=operator
    shouldResetScreen= true
}


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
 
function roundResult(number){
    return Math.round(number*1000)/1000;
}


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


