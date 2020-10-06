  const newProject = (name, description, todo = {}, id) => {
    return {
      name, 
      description, 
      todo,
      id,
    }
  }
  
  export { newProject }
