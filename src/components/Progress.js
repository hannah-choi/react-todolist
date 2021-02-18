import React from "react";

function Progress({ todo, progress, toggle, completed }) {
    const complete = (
        <>
            {todo}: <div className="progress">{"Completed 🟢"}</div>
            <br />
        </>
    );
    const progressButton = (
        <>
            {todo}:{" "}
            <div className="progress" onClick={toggle}>
                {progress ? "Almost done 🟡" : "In progress 🔴"}
            </div>
            <br />
        </>
    );

    console.log({ todo, progress });
    return <>{completed ? complete : progressButton}</>;
}

export default Progress;
