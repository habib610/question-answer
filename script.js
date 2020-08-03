const btn = document.querySelectorAll('.btn');
const text = document.querySelector('.text');


for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('display')
    })
}