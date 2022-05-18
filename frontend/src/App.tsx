import React, { useState } from 'react';
import './App.css';
import { TodoState } from './utils/utils';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notification from './tabs/Notification';
import Todo from './tabs/Todo';
import Layout from './components/Layout';
import AddNewTodo from './components/AddNewTodo';

function App() {

  // const [activeTab, setActiveTab] = useState<HTMLDivElement | null>(null)
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

  const determineTheNextId = (): number => {
    const ids = todos.map(each => each.id)
    return Math.max(...ids) + 1
  }

  return (
    <Router>
      <div className='main'>
        <div className='main-card'>
          <Routes>
            <Route path="/" element={<Layout newTodoCardOpen={{ isNewTodoCardOpen, setIsNewTodoCardOpen }} />}>
              <Route path="/notification" element={<Notification />} />
              <Route path="/todo" element={<Todo todosObject={{ todos, setTodos }} />} />
            </Route>
          </Routes>
        </div>

        <AddNewTodo setTodos={setTodos} newTodoCardOpen={{ isNewTodoCardOpen, setIsNewTodoCardOpen }} determineTheNextId={determineTheNextId} />
      </div>

    </Router >
  );
}

export default App;
