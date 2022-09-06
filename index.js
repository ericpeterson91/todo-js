const form = document.querySelector('form')
const tasks = document.querySelector('.tasks')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let task = document.querySelector('.task').value
    let li = document.createElement('li')
    li.innerHTML = task
    if (task.length > 0) {
        tasks.append(li)
    }
    document.querySelector('.task').value = ''
})