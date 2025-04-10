let input = document.querySelector('.input')
let enter_btn = document.querySelector('.enter')
let body = document.querySelector('body')
let container = document.querySelector('.container')
let saved_tasks = {}
let number = 1

// saveData()

enter_btn.addEventListener('click', () => {
	check_input_value = input.value
	if(check_input_value === ''){
		input.placeholder = 'Please, write your task'
		throw new Error('Please, write your task')
	}
	let block = document.createElement('div')
	block.classList.add('task')
	block.setAttribute('data-id', number)

	let btn_ready = document.createElement('button')
	btn_ready.classList.add('ready_task')

	btn_ready.addEventListener('click', () => {
		btn_ready.classList.toggle('ready_task_active')
		text_task.classList.toggle('text_task_active')
	})

	let text_task = document.createElement('p')
	text_task.classList.add('text_task')
	text_task.textContent = input.value;

	let del_task = document.createElement('img')
	del_task.classList.add('del_task')
	del_task.setAttribute('src', 'img/trash-can-svgrepo-com.svg')

	del_task.addEventListener('click', () => {
		block.remove()
	})

	block.append(btn_ready, text_task, del_task)
	container.append(block)

	localStorage.setItem(`task${number}`, block.innerHTML)
	number++;
		// saveData()
		
		// saved_tasks[number] = (block.innerHTML.toString())
		localStorage.setItem('number', number-1)
	input.value = ''
})

// function saveData(){
// 	if(JSON.parse(localStorage.getItem('task')) === null){
// 		return
// 	}
// 	let keys_obj = Object.keys(JSON.parse(localStorage.getItem('task')))

// 	for(let i = 0; i < keys_obj.length; i++ ){
// 		let b = i+1
// 		if( b.toString() === keys_obj[i]){
// 			console.log(keys_obj)
// 			number = i+2;
// 			console.log(number)
// 		}
// 	}
// }


