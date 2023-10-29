const sub = document.querySelector('.sub');
const add = document.querySelector('.add')
const resetdiv = document.querySelector('.resetbtn')
const counter = document.querySelector('.counter')

sub.addEventListener("click", function(){
    counter.innerHTML--;
    setColor()
    
})
add.addEventListener("click", function(){
    counter.innerHTML++;
    setColor()
})
resetdiv.addEventListener("click", function(){
    counter.innerHTML= 0;
    setColor()
})

function setColor(){
    if(counter.innerHTML > 0){
        counter.style.color = "yellow"
    } else if (counter.innerHTML < 0){
        counter.style.color = "red" 
    } else {
        counter.style.color ="white"
       }
}

// function setColor (){
//     if (count.innerHTML > 0){
//      count.style.color = "yellow"
//     } else if (count.innerHTML < 0){
//      count.style.color = "black"
//     } else {
//      count.style.color ="white"
//     }
//  }