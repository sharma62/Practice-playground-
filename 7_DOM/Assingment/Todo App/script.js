let form = document.querySelector('form');
let list = document.querySelector('.list-disc');
let tasks  =[];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = (form.elements[0].value).trim();
    tasks.push({tasks: input,status: false})

   console.log(tasks)
    if (input !== '') {
        let div = document.createElement('div');
        let childDiv = document.createElement('div');
        let ul = document.createElement('ul')
        let li = document.createElement('li');
        let input_2 = document.createElement('input');
        let siblingDiv = document.createElement('div')
        let resultEdit_Input_3 = document.createElement('input')
        let resultDelete_Input_4 = document.createElement('input')


        div.classList.add('grid', 'grid-cols-3', 'gap-5', 'mt-5');
        childDiv.classList.add('col-span-2')
        ul.classList.add('list-disc')
 
        div.appendChild(childDiv) //  Div.grid > Div.col-span-2
        childDiv.appendChild(ul)    // Div.col-span-2.list  > Ul.list-disc
        ul.appendChild(li)    // Ul.list-dis > li.p-2
        li.appendChild(input_2) //li.p-2 > input

        input_2.setAttribute('type', 'text')
        input_2.setAttribute('value', input)
        input_2.setAttribute('disabled', 'true')
        input_2.classList.add('w-full','p-2','bg-gray-200','rounded')

        siblingDiv.classList.add('col-span-1')
        div.appendChild(siblingDiv)

        resultEdit_Input_3.setAttribute('type','button')
        resultEdit_Input_3.setAttribute('value','Edit')
        resultEdit_Input_3.classList.add('px-8', 'py-2', 'border', 'border-blue-400', 'rounded', 'hover:bg-yellow-500', 'cursor-pointer')

        resultDelete_Input_4.setAttribute('type', 'button')
        resultDelete_Input_4.setAttribute('value', 'Delete')
        resultDelete_Input_4.classList.add('px-8', 'py-2', 'border', 'border-blue-400', 'rounded', 'hover:bg-red-500', 'cursor-pointer')

        siblingDiv.appendChild(resultEdit_Input_3)
        siblingDiv.appendChild(resultDelete_Input_4)

        // user interaction with the edit & delete btn
        
        resultEdit_Input_3.addEventListener('click', () => {
                if(input_2.disabled ===true){
                    input_2.disabled =false
                    input_2.focus()
                    resultEdit_Input_3.value= 'Save'
                }else{
                    input_2.setAttribute('disabled', 'true')
                    resultEdit_Input_3.value= 'Edit '
                }
            
        })
        resultDelete_Input_4.addEventListener('click', () => {
             console.log('Delete button')
        })

        let task = document.querySelector('.task')
        task.appendChild(div)
        

        console.log(div.has)
        form.elements[0].value = '';

    } else {
        alert('Please enter a valid input')
    }

})

