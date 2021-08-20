interface Todo {
    text: string;
    complete: boolean;
}

type ToggleTodo = (selected: Todo) => void;