const key = document.querySelector('.todoenter');
const input = document.getElementById('todo');
const Todo = document.getElementById('new');

key.addEventListener("keypress",function(e){

    if(e.keyCode === 13){

            e.preventDefault();
            const text  = input.value;
            
            if(text){
                const newTodo = document.createElement('li');
                newTodo.classList.add('normal');

                newTodo.addEventListener("click", () => {

                    newTodo.classList.toggle('done');

                });

                newTodo.addEventListener('dblclick', () => {
                    newTodo.remove();
                })

                newTodo.setAttribute("style","list-style:none");
                newTodo.textContent = text;
                Todo.appendChild(newTodo);
            }
               input.value = null;
        }    

    });