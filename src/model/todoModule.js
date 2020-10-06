import { newTodo } from '../factory/todos'



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
}