import React from 'react'
import { TodoItem } from '../utils/utils'

function Todos({ value }: TodoItem) {
      const { taskName, description, dueDate, assignee, completed } = value

      return (
            <div>{taskName}</div>
      )
}

export default Todos