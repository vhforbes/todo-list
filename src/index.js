import _ from 'lodash';
import { domModule } from './domController'
import { todoModule } from './todos'
import { projectModule } from './projects'

// Adds content to APP

const appContent = document.querySelector('#appContent')

const addContent = content => {
  appContent.appendChild(content)
}

// Run application

let firstProject = projectModule.newProject('test2', 'test', 'test')


document.body.appendChild(domModule.newProject(firstProject))