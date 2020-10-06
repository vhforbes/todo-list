import { newProject } from '../factory/projects'
import { projectData } from './projectData'


const projectFunc = (() => {

  // Updates each project ID when data is manipulated
  const updateID = (projectData) => {
    let id = 1 
    projectData.forEach(element => {
      element['id'] = id
      id++
    });
  }

  const findIndex = (projectData, id) => {
    let index = 0

    projectData.forEach(element => {
      if (element['id'] == id) {
        index = projectData.indexOf(element)
      } else {}
    })

    return index
  }


  const add = (projectData, project) => {
    projectData.push(project)
    updateID(projectData)
  }

  // Remove from data array given an ID
  const remove = (projectData, id) => {

    projectData.splice(findIndex(projectData, id), 1)        

    updateID(projectData)
  }

  const update = (updatedProj, projectData, id) => {

  }


  return {
    add,
    remove,
    update,
    findIndex,

  }
})()


export { 
  projectFunc,
 }