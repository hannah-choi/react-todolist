import React, { useState, useCallback, useEffect } from "react";
import { useTodo } from "../TodoProvider";

function Progress({ todo, progress, toggle, completed }) {
    const complete = (
        <>
            {todo}: <div>{"Completed 🟢"}</div>
        </>
    );
    const progressButton = (
        <>
            {todo}:{" "}
            <div onClick={toggle}>
                {progress ? "Almost done 🟡" : "In progress 🔴"}
            </div>
        </>
    );

    console.log({ todo, progress });
    return <>{completed ? complete : progressButton}</>;
}

export default function ProgressManager() {
    const { todos } = useTodo();

    Progress = React.memo(Progress);

    const [progress1, setProgress1] = useState(true);
    const [progress2, setProgress2] = useState(true);
    const [progress3, setProgress3] = useState(true);
    const [progress4, setProgress4] = useState(true);

    const handleToggle1 = useCallback(() => {
        setProgress1(!progress1);
    }, [progress1, todos[0].completed]);
    const handleToggle2 = useCallback(() => {
        setProgress2(!progress2);
    }, [progress2, todos[1].completed]);
    const handleToggle3 = useCallback(() => {
        setProgress3(!progress3);
    }, [progress3, todos[2].completed]);
    const handleToggle4 = useCallback(() => {
        setProgress4(!progress4);
    }, [progress4, todos[3].completed]);

    return (
        <>
            <h4>Progress Report</h4>
            {todos[0] && (
                <Progress
                    todo={todos[0].task}
                    completed={todos[0].completed}
                    progress={progress1}
                    toggle={handleToggle1}
                />
            )}
            {todos[1] && (
                <Progress
                    todo={todos[1].task}
                    completed={todos[1].completed}
                    progress={progress2}
                    toggle={handleToggle2}
                />
            )}
            {todos[2] && (
                <Progress
                    todo={todos[2].task}
                    completed={todos[2].completed}
                    progress={progress3}
                    toggle={handleToggle3}
                />
            )}
            {todos[3] && (
                <Progress
                    todo={todos[3].task}
                    completed={todos[3].completed}
                    progress={progress4}
                    toggle={handleToggle4}
                />
            )}
        </>
    );
}
