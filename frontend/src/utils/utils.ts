
export interface TodoItem {
      value: {
            taskName: string,
            description?: string,
            dueDate: Date,
            assignee: string,
            completed: boolean
      }
}

export interface TodoState {
      type: TodoItem["value"][]
}