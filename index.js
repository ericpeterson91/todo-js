const form = document.querySelector('form')
const tasks = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let task = document.querySelector('.task').value
    console.log(task)

    
})