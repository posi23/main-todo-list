
export interface TodoItem {
      value: {
            id: number
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