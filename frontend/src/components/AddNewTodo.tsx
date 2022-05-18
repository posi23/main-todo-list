import React, { useEffect, useRef, useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { FiCalendar } from 'react-icons/fi'
import { TodoState } from '../utils/utils'
import Modal from './Modal'

interface IProps {
      setTodos: React.Dispatch<React.SetStateAction<TodoState["type"]>>
      newTodoCardOpen: {
            isNewTodoCardOpen: boolean,
            setIsNewTodoCardOpen: React.Dispatch<React.SetStateAction<boolean>>
      }
      determineTheNextId: () => number
}

function AddNewTodo({ setTodos, newTodoCardOpen, determineTheNextId }: IProps) {

      const { isNewTodoCardOpen, setIsNewTodoCardOpen } = newTodoCardOpen

      const [taskName, setTaskName] = useState<string>("")
      const [description, setDescription] = useState<string>("")
      const [dueDate, setDueDate] = useState<Date>(new Date())
      const [assignee, setAssignee] = useState<string>("")

      const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

      const newTodoCardRef = useRef<HTMLDivElement | null>(null)

      const addNewTodoToTheList = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault()

            try {
                  validateFields()
                  const newTodo = {
                        id: determineTheNextId(),
                        taskName,
                        description,
                        dueDate: new Date("16 May 2022"),
                        assignee: assignee,
                        completed: false
                  }
                  if (newTodo) {
                        setTodos(prev => [...prev, newTodo])
                  }

                  clearStateToInitialState()
            }
            catch (err) {
                  alert(err)
            }
      }

      const clearStateToInitialState = () => {
            setTaskName("")
            setDescription("")
            setDueDate(new Date())
            setAssignee("")
      }

      const validateFields = () => {
            if (taskName === "" || assignee === "") throw new Error("'Task name' or 'Assign To' field needs to filled")
      }

      useEffect(() => {
            if (newTodoCardRef.current) {
                  newTodoCardRef.current.style.display = isNewTodoCardOpen ? 'flex' : 'none'
            }
      }, [isNewTodoCardOpen])

      return (
            <div className='add-task-card' ref={newTodoCardRef}>

                  <input
                        type="text"
                        className='task-name-input'
                        placeholder='Task name here...'
                        value={taskName}
                        onChange={e => setTaskName(e.target.value)} />

                  <input
                        type="text"
                        className='description-input'
                        placeholder='Description'
                        value={description}
                        onChange={e => setDescription(e.target.value)} />

                  <div className='button-container'>
                        <div className='completion-time-buttons'>
                              <button className='date-btn'>
                                    <span><FiCalendar size={20} /></span>
                                    Due Date
                              </button>

                              <button className='assignee-btn' onClick={() => setIsModalOpen(true)}>
                                    <span><BsPerson size={20} /></span>
                                    {assignee !== "" ? assignee : "Assign To"}
                              </button>
                        </div>

                        <div className="card-action-buttons">
                              <button className="cancel-btn" onClick={e => setIsNewTodoCardOpen(false)}>
                                    Cancel
                              </button>
                              <button className="add-btn" onClick={e => addNewTodoToTheList(e)}>
                                    Add Task
                              </button>
                        </div>

                  </div>

                  <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setAssignee={setAssignee} />

            </div>
      )
}

export default AddNewTodo