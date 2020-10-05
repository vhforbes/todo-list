import _ from 'lodash';
import { newTodo } from './factory/todos'
import { todoData, todoFunctions, todoFunctons } from './model/todoModule'

 
let defautTodo1 = newTodo('Title', 'Description' , 1, false)
let defautTodo2 = newTodo('Title 2', 'Description' , 2, false)
let defautTodo3 = newTodo('Title 3', 'Description' , 3, false)


console.log(todoData.newTodoList(defautTodo1, defautTodo2, defautTodo3))




import { todoDom } from './view/todosView'


