interface Todo {
    text: string;
    complete: boolean;
    id: string;
}

type ToggleTodo = (selected: Todo) => void;

type AddTodo = (text: string) => void;