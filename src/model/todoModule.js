import { newTodo } from '../factory/todos'


const todoData = (() => {

  const newTodoList = (...allTodos) => {
    let todosArray = []

    for (let todo of allTodos) {
      todosArray.push(todo)
    }

    return todosArray
  }

  const updateTodoList = todoArry => {


    // Modify the given array
  } 

  return {
    newTodoList,
  }

})()


const todoFunctions = (() => {

  // Change the completed status of a todo task
  const setCompleted = object => {
    if (!object['status']) {
      object['status'] = true
    } else object['status'] = false
  }

  

  return {
    setCompleted,
  }

})()



export { 
  todoFunctions,
  todoData,
}