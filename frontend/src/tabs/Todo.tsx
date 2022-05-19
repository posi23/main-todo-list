import React, { useEffect } from 'react'
import { getAmountOfUncompletedTodos, TodoState } from '../utils/utils'
import { FiCalendar } from "react-icons/fi"
import { BsPerson, BsDot, BsCheckLg, BsTrash } from "react-icons/bs"

interface IProps {
      todosObject: {
            todos: TodoState["type"],
            setTodos: React.Dispatch<React.SetStateAction<TodoState["type"]>>
      }
}

function Todo({ todosObject }: IProps) {

      const { todos, setTodos } = todosObject

      const deleteTodo = (id: number) => {
            setTodos(prev => prev.filter(each => each.id !== id))
      }

      const updateCompleteUncomplete = (id: number) => {
            setTodos(prev =>
                  prev.map(each => each.id === id ? { ...each, completed: !each.completed } : each)
            )
      }

      return (
            <>
                  {todos.map((todo) => (
                        <div className='main-display' key={todo.id}>
                              <div className='completed-circle' onClick={() => updateCompleteUncomplete(todo.id)}>
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

                              <div className='delete-icon' onClick={() => deleteTodo(todo.id)}>
                                    <BsTrash size={25} />
                              </div>
                        </div>
                  ))}
            </>
      )
}

export default Todo