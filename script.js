

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


const screen=document.querySelector(".screen")
const numberButtons = document.querySelectorAll(".btn-num") // foreach ile diğer elemanlara ulaşcaz
const operatorsButtons = document.querySelectorAll(".btn-operator")
const equalButton= document.querySelector(".btn-equal")
const clearButton=document.querySelector(".btn-clear")
const deleteButton=document.querySelector(".btn-delete")
const pointButton=document.querySelector(".btn-point")



numberButtons.forEach((button)=>
    button.addEventListener('click',()=>appendNumber(button.textContent))    
)
operatorsButtons.forEach((button)=>
    button.addEventListener('click',()=>appendOperator(button.textContent))
)


function appendNumber(number){
    if(screen.textContent==="0") resetScreen()
    screen.textContent+=number
    
}
function resetScreen(){
    screen.textContent=""
}
function appendOperator(operator){
    if(currentOperation !==null) evaluate();
    firstOperand=screen.textContent
    currentOperation=operator
}


function evaluate(){
    if(currentOperation ===null){
        return
    }
    if(currentOperation === "/" && screen.textContent==="0"){
        alert("can't divide by 0")
        clear()
        return
    }
    
}
 

function setOperation(operator){
    currentOperation=operator
    screen.textContent +=operator
    return currentOperation
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
console.log(currentOperation);

function operate (operator, x, y){
    if(operator ='+'){
        return add(x,y)
    }if(operator ='-'){
        return subtract(x,y)
    }if(operator ='*'){
        return multiply(x,y)
    }if(operator ='/'){
        return add(x,y)
    }

}
plusButton.addEventListener('click',()=> add(firstNum,currentNum))
equal.addEventListener("click",()=> operation())

