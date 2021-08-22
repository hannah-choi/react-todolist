interface Todo {
    text: string;
    id: string;
    complete: boolean;
}

type ToggleTodo = (id: string) => void;
type AddTodo = (text: string) => void;
type DeleteTodo = (id: string) => void;
type EditTodo = (id: string, text: string) => void;