import { newTodo } from '../factory/todos'
import { newProject } from '../factory/projects'
import { projectFunc } from './projectFunc'

const projectData = []

let defaultProject = newProject('Default Project1',  'Description', newTodo('Title 3', 'Description' , 3, false))
let defaultProject2 = newProject('Default Project2',  'Description', newTodo('Title 3', 'Description' , 3, false))
let defaultProject3 = newProject('Default Project3',  'Description', newTodo('Title 3', 'Description' , 3, false))


projectFunc.add(projectData, defaultProject)
projectFunc.add(projectData, defaultProject2)
projectFunc.add(projectData, defaultProject3)


console.log(projectFunc.findIndex(projectData, 2))

projectFunc.remove(projectData, 2)


export { projectData }