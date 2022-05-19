
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

export const getErrorMessage = (err: unknown): string => {
      if (err instanceof Error) return err.message
      return String(err)
}

export const getAmountOfUncompletedTodos = (todos: TodoState["type"]): number => {
      const uncompletedTodosArray = todos.filter(each => each.completed === false)
      return uncompletedTodosArray.length
}

export const styleAsActive = (textRef: React.MutableRefObject<HTMLAnchorElement | null>, activeRef: React.MutableRefObject<HTMLDivElement | null>) => {
      if (textRef.current && activeRef.current) {
            textRef.current.style.color = "#000"
            activeRef.current.style.display = "block"
      }
}

export const styleAsInactive = (textRef: React.MutableRefObject<HTMLAnchorElement | null>, activeRef: React.MutableRefObject<HTMLDivElement | null>) => {
      if (textRef.current && activeRef.current) {
            textRef.current.style.color = "rgb(148, 147, 150)"
            activeRef.current.style.display = "none"
      }
}

export const determineTheNextId = (todos: TodoState["type"]): number => {
      const ids = todos.map(each => each.id)
      return Math.max(...ids) + 1
}