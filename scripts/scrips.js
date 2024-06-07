let myForm = document.querySelector('#myform');
let textTodo = document.querySelector('.todo');
let total = 0;

myForm.addEventListener('submit', function(){
    if(textTodo.value != null){
        let itme = document.createElement('li')
        itme.innerHTML = textTodo.value;
        textTodo.value = null;
        let ulItme = document.querySelector('#tasks ul');
        ulItme.appendChild(itme);
        total++;
        document.querySelector('#totalnumber').innerHTML = total;
    }else{
        alert('type something ...');
    } 
});
