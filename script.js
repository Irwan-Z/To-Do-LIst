const input = document.querySelector('#inputBox');
const btn = document.querySelector('#btnBox')
const ul = document.getElementById('listItem')


btn.addEventListener('click', ()=>{
    if(input.value === ''){
        alert('tidak boleh kosong')
    }else{
        const lisput = input.value;
        const list = document.createElement('li')
        list.append(lisput)
        ul.appendChild(list)
        const span = document.createElement('span');
        span.append('\u00d7');
        list.appendChild(span);
    }
    input.value = '';
    saveData();
})

ul.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',ul.innerHTML)
}
function showData(){
    ul.innerHTML = localStorage.getItem('data')
}

showData()