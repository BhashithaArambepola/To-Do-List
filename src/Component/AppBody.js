
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import '../CSS/AppBody.css'

function AppBody() {

    // toDo list State set
    const [toDo, setToDo] = useState([
        { "id": 1, "title": "Task 1", "status": false },
        { "id": 2, "title": "Task 2", "status": false }
    ])

    // temp state
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    // add Task function
    const addTask = () => {
        if (newTask) {
            let num = toDo.length + 1;
            let newEntry = { id: num, title: newTask, status: false }
            setToDo([...toDo, newEntry])
            setNewTask("");
        }
    }


    // delete Task function
    const deleteTask = (id) => {
        let newTasks = toDo.filter(task => task.id !== id)
        setToDo(newTasks)
    }

    // mark task as done or completed
    const markDone = (id) => {
        let newTask = toDo.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setToDo(newTask)
    }


    // Cancel update
    const cancelUpdate = () => {
        setUpdateData('');
    }
    // change Task for update function
    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry);
    }


    // update task
    const updateTask = () => {
        let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
        let updatedObject = [...filterRecords, updateData]
        setToDo(updatedObject);
        setUpdateData('')
    }



    return (
        <div className='appBody py-5 container'>
            <h1 className='py-5'>To Do List</h1>


            {/* Display To-Dos */}
            {toDo && toDo.length ? '' : 'No Tasks...'}

            {/* add task */}


            {/* update task */}
            {updateData && updateData ? (
                <div className='row pb-3 d-flex '>
                    <div className='col-12 col-md-7 col-lg-8 pb-3'>
                        <input className='form-control form-control-lg'
                            value={updateData && updateData.title}
                            onChange={changeTask}></input>
                    </div>
                    <div className='col-12 col-md-5 col-lg-4  d-flex justify-content-center  justify-content-md-end '>
                        <button onClick={updateTask} className='btn btn-success btn-lg me-md-2 me-5'>Update Task</button>
                        <button onClick={cancelUpdate} className='btn btn-warning btn-lg '>Cancel</button>
                    </div>
                    <div className='col-auto col-md-2 d-flex justify-content-end'>


                    </div>
                </div>
            ) : (
                <div className='row pb-3 d-flex justify-content-between'>
                    <div className='col-8'>
                        <input
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)} className='form-control form-control-lg'></input>
                    </div>
                    <div className='col-auto d-flex justify-content-end'>
                        <button onClick={addTask} className='btn btn-success btn-lg '>Add Task</button>
                    </div>
                </div>
            )}



            {toDo && toDo.sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>


                            <div className='col taskBg p-3 
mb-3 rounded text-start position-relative d-flex justify-content-between'>
                                <div className={task.status ? 'done' : ''}>
                                    <span className='taskNumber d-flex text-center align-items-center justify-content-center me-3 '>{index + 1}</span>
                                    <span className='taskText'>{task.title}</span>
                                </div>
                                <div className='iconWrap'>
                                    <span title='Completed/Not Completed' onClick={(e) => markDone(task.id)} className='px-2'><FontAwesomeIcon icon={faCircleCheck} /></span>
                                    {task.status ? null : (
                                        <span title='Edit TAsk' onClick={() => setUpdateData({
                                            id: task.id,
                                            title: task.title,
                                            status: task.status ? true : false
                                        })}
                                            className='px-2'><FontAwesomeIcon icon={faPen} /></span>
                                    )}


                                    <span title='Delete' onClick={() => deleteTask(task.id)} className='px-2'><FontAwesomeIcon icon={faTrashCan} /></span>
                                </div>
                            </div>


                        </React.Fragment>
                    )
                })}

        </div>
    )
}

export default AppBody