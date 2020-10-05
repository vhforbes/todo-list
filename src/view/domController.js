const domModule = (() => {

  const newProject = project => {
    let projectDiv = document.createElement('div')
    let projectName = project['name']
    let projectDesc = project['description']

    projectDiv.textContent = projectName

    return projectDiv
  }



  

  return { newProject }
})()

export { domModule }