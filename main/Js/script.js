

let nav = document.querySelector(".navbar");
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled"); 
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// Hide nav after click


let navBar = document.querySelectorAll(".col69");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// // Modal
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })
const button = document.getElementById('klo')
setTimeout(()=>{
    // button.click;
    console.log(button.click());
},15000)




 



