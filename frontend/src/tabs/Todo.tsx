import React from 'react'
import { TodoState } from '../utils/utils'
import { FiCalendar } from "react-icons/fi"
import { BsPerson, BsDot, BsCheckLg } from "react-icons/bs"

function Todo({ type }: TodoState) {
      // const { taskName, description, dueDate, assignee, completed } = todos
      const todos = type

      return (
            <div>
                  {todos.map(todo => (
                        <div className='main-display'>
                              <div className='completed-circle'>
                                    {todo.completed && <BsCheckLg color="green" />}
                              </div>

                              <div className='todoItem'>
                                    <p className='taskName'>{todo.taskName}</p>
                                    <p className='task-description'>{todo.description}</p>
                                    <div className='completion-time'>
                                          <p className='due-date'>
                                                <span>
                                                      <FiCalendar size={18} />
                                                </span>
                                                {todo.dueDate.toLocaleDateString()}
                                          </p>
                                          <p className='splitting-dot'>
                                                <BsDot color='rgb(162, 156, 168)' />
                                          </p>
                                          <p className='assignee'>
                                                <span>
                                                      <BsPerson size={18} />
                                                </span>
                                                {todo.assignee}
                                          </p>
                                    </div>
                                    <p className='completed'>{todo.completed}</p>

                              </div>
                        </div>
                  ))}



            </div>
      )
}

export default Todo