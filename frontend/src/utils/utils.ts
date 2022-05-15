
export interface TodoItem {
      taskName: string,
      description: string,
      dueDate: Date,
      assignee: string,
      completed: boolean | false
}

export interface TodoState {
      type: TodoItem[]
}