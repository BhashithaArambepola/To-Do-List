
import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import '../CSS/AppBody.css'

function AppBody() {

// toDo list State set
const [toDo, setToDo]=useState([
    {"id":1, "title":"Task 1","status":false},
    {"id":2, "title":"Task 2","status":false}
])

// temp state
const [newTask,setNewTask]=useState('');
const [updateData,setUpdateData]=useState('');

// add Task function
const addTask=()=>{
//
}  


// delete Task function
const deleteTask=(id)=>{
    //
}

// mark task as done or completed
const markDone=(id)=>{
// 
}

// change Task for update function
const changeTask=(e)=>{
    // 
}


// update task
const updateTask=()=>{
    // 
}



return (
    <div className='appBody py-5 container'>
<h1 className='py-5'>To Do List</h1>


{/* Display To-Dos */}
{toDo && toDo.length ? '': 'No Tasks...'}

{/* add task */}
<div className='row pb-3 d-flex justify-content-between'>
<div className='col-8'>
    <input className='form-control form-control-lg'></input>
</div>
<div className='col-auto d-flex justify-content-end'>
    <button className='btn btn-success btn-lg '>Add Task</button>
</div>
</div>

{toDo && toDo.sort((a,b)=>a.id>b.id ? 1:-1)
.map((task,index)=>{
    return(
        <React.Fragment key={task.id}>


<div className='col taskBg p-3 
mb-3 rounded text-start position-relative d-flex justify-content-between'>
<div className={task.status? 'done':''}>
<span className='taskNumber d-flex text-center align-items-center justify-content-center me-3 '>{index+1}</span>
<span className='taskText'>{task.title}</span>
</div>
<div className='iconWrap'>
    <span title='Add New' className='px-2'><FontAwesomeIcon icon={faCircleCheck}/></span>
    <span title='Edit TAsk' className='px-2'><FontAwesomeIcon icon={faPen}/></span>
    <span title='Delete' className='px-2'><FontAwesomeIcon icon={faTrashCan}/></span>
</div>
</div>


        </React.Fragment>
    )
})}

    </div>
  )
}

export default AppBody