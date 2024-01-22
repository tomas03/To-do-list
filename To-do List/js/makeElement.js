function makeElement({tagName, content}){
    let element = document.createElement(tagName);
    if(content){
        element.innerHTML = content;
    }
    return element;
    
}
function isEmpty(value){
    return value.trim() === '';
}
let listaTareas = document.querySelector('#lista-tareas'),
campoTarea = document.querySelector('#campoTarea'),
agregarTarea = document.querySelector('#agregarTarea');
const fnAgregarTarea = (event)=>{
    event.preventDefault();
    let tarea = campoTarea.value;
    if(! isEmpty(tarea)){
        let li = makeElement({
            tagName: 'li',
            content: `${campoTarea.value} <button class = 'removerTarea'>X</button>`
        })
        listaTareas.append(li);
        campoTarea.value = '';
        campoTarea.focus();
    }
};
agregarTarea.addEventListener('click', fnAgregarTarea);
document.addEventListener('click', (event)=>{
    let target = event.target;
    if (target.classList.contains('removerTarea')){
        target.parentElement.remove();
    }
})
campoTarea.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter'){
        fnAgregarTarea(event);
    }
})
