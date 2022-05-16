import React, { useState } from 'react';
import './App.css';
import { TodoState } from './utils/utils';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notification from './tabs/Notification';
import Todo from './tabs/Todo';
import Layout from './components/Layout';

function App() {

  const [activeTab, setActiveTab] = useState<HTMLDivElement | null>(null)
  const [todos, setTodos] = useState<TodoState["type"]>([
    {
      taskName: "Complete main UI components",
      description: "Would be good if we include every component",
      dueDate: new Date("16 May 2022"),
      assignee: "Esther Howard",
      completed: true
    },

    {
      taskName: "Landing Page Design",
      dueDate: new Date("20 May 2022"),
      assignee: "Brooklyn Simmons",
      completed: false
    }
  ])

  return (
    <Router>
      <div className='main-card'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/notification" element={<Notification />} />
            <Route path="/todo" element={<Todo type={todos} />} />
          </Route>
        </Routes>
      </div>

    </Router >
  );
}

export default App;
