
import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import '../CSS/AppBody.css'

function AppBody() {

// toDo list State set
const [toDo, setToDo]=useState([
    {"id":1, "title":"task 1","status":false},
    {"id":2, "title":"task 2","status":false}
])

// temp state
const [newTask,setNewTask]=useState('');
const [updateData,setUpdateData]=useState('');


  return (
    <div className='appBody py-5'>
<h1>To Do List</h1>

    </div>
  )
}

export default AppBody