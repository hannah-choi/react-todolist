import React from "react";

function Progress({ todo, progress, toggle, completed }) {
    const complete = <button disabled>{"Completed 🟢"}</button>;
    const progressButton = (
        <button onClick={toggle}>
            {progress ? "Almost done 🟡" : "In progress 🔴"}
        </button>
    );

    console.log({ todo, progress });
    return <>{completed ? complete : progressButton}</>;
}

export default Progress;
