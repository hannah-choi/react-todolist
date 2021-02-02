import Input from "./components/Input";
import List from "./components/List";
import TodoProvider from "./context/todoContext";

function App() {
    return (
        <div className="App">
            <TodoProvider>
                <Input />
                <List />
            </TodoProvider>
        </div>
    );
}

export default App;
