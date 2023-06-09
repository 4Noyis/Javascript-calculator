

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




let currentNum =''
let firstNum=0
let secondNum=0


let result=0;

const numberButtons = document.querySelectorAll(".btn-num") // foreach ile diğer elemanlara ulaşcaz
const plusButton=document.getElementById("add")
const minusButton=document.getElementById("subtract")
const crossButton=document.getElementById("multiply")
const slashButton=document.getElementById("divide")
const equalbutton=document.getElementById("equal")

numberButtons.forEach((button)=>
    button.addEventListener('click',()=>appendNumber(button.textContent))    
)

function appendNumber(number){
    currentNum+=number
}


function operation(){
    firstNum+=parseInt(currentNum)
    currentNum=''
    console.log(firstNum);
    console.log(currentNum);
}

// her işlem sembolüne tıklandığında currentNum değişkenini ana değişkene istenilen işlemle ekle çarp böl 


function add(x,y){
    console.log(x+=y);
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

function operate (opetator, x, y){
    

}
plusButton.addEventListener('click',()=> add(firstNum,currentNum))
equal.addEventListener("click",()=> operation())

