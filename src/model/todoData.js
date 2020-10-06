const todoData = (() => {

  const newTodoList = (...allTodos) => {
    // let todosArray = {
    //   projectName: 'Default',
      
    // }

    for (let todo of allTodos) {
      allTodos.push(todo)
    }

    return todosArray
  }

  const updateTodoList = todoArray => {


    // Modify the given array

    
  } 

  return {
    newTodoList,
  }

})()

export { todoData }