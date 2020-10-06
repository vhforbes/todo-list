const todoDom = (() => {

  const showTodos = todosArray => {
    let allTodosDiv = document.createElement('div')
    allTodosDiv.className = 'allTodos'
  
    todosArray.forEach(element => {
      let todoDiv = document.createElement('div')
      todoDiv.className = 'singleTodo'
  
      for (const property in element) {
        let todoItem = document.createElement('p')
  
        todoItem.textContent = `${property} :: ${element[property]}`
        
        todoDiv.appendChild(todoItem)
        console.log(element[property])
      }
  
      allTodosDiv.appendChild(todoDiv)
      todoDiv.style.border = '2px solid red'
    })
  
    return allTodosDiv
  }

  


  return {
    showTodos,
  }

})()

export { todoDom }