const clear = document.querySelector('.clear')
// what is a crud operation
// c = create
// r = read
// u = update
// d = delete
let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek for a job', completed: false },
  { id: 3, text: 'Forget everything' }
]
// function showTodos() {
//     let html = `
//     <ul>
//         <li>Learn JavaScriopt</li>
//         <li>Seek fo a job</li>
//         <li>Forget everything</li>
//     </ul>`
//     return html
// }
// instead of this we do as following
function render() {
  document.querySelector('ul').innerHTML = todos
    .map(
      (todo, index) => `<li class="${todo.completed ? 'done' : ''}">
        <button onclick="handleRemove(${index})">x</button>
        <span onclick="handleToggle(${index})">${todo.text}</span>
        </li>`
    )
    .join('')
}
render()
document.querySelector('form').onsubmit = function(event) {
  event.preventDefault()
  let id = generatedId()
  let text = document.querySelector('input').value
  let completed = document.querySelector()
  let todo = { id, text }
  todos.push(todo)
  document.querySelector('input').value = ''
  render()
}
//
function generatedId() {
  return todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
}
function handleRemove(index) {
  todos.splice(index, 1)
  render()
}
function handleToggle(index) {
  todos[index].completed = !todos[index].completed
  render()
}
//////////////OR////////////////////////
/// function generatedId() {
// return !todos.length ? 1 : todos[todos.length - 1].id + 1;
//};
