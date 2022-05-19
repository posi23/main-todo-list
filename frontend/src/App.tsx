import React, { useState, useEffect } from 'react';
import './App.css';
import { getAmountOfUncompletedTodos, TodoState } from './utils/utils';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Todo from './tabs/Todo';
import Layout from './components/Layout';
import AddNewTodo from './components/AddNewTodo';
import Activity from './tabs/Activity';

function App() {

  const [todos, setTodos] = useState<TodoState["type"]>([
    {
      id: 1,
      taskName: "Complete main UI components",
      description: "Would be good if we include every component",
      dueDate: new Date("16 May 2022"),
      assignee: "Esther Howard",
      completed: true
    },

    {
      id: 2,
      taskName: "Landing Page Design",
      dueDate: new Date("20 May 2022"),
      assignee: "Brooklyn Simmons",
      completed: false
    }
  ])

  const [isNewTodoCardOpen, setIsNewTodoCardOpen] = useState<boolean>(false)
  const [activityNotification, setActivityNotification] = useState<number>(1)
  const [todoNotification, setTodoNotification] = useState<number>(0)

  useEffect(() => {
    let newTodoNotification = getAmountOfUncompletedTodos(todos)
    setTodoNotification(newTodoNotification)
  }, [todos])

  return (
    <Router>
      <div className='main'>
        <div className='main-card'>
          <Routes>
            <Route path="/" element={<Layout
              newTodoCardOpen={{ isNewTodoCardOpen, setIsNewTodoCardOpen }}
              todoNotification={todoNotification}
              activityNotification={activityNotification} />}>
              <Route path="/activity" element={<Activity />} />
              <Route path="/todo" element={<Todo todosObject={{ todos, setTodos }} />} />
            </Route>
          </Routes>
        </div>

        <AddNewTodo todosObject={{ todos, setTodos }} newTodoCardOpen={{ isNewTodoCardOpen, setIsNewTodoCardOpen }} />
      </div>

    </Router >
  );
}

export default App;
