import { useState } from "react";
import { createTask } from "../API/tasks";
import { Link } from "react-router-dom";
import "../Components/Main.css";

function Chat(props) {
  const { loadTasks } = props;
  const [newTaskName, setNewTaskName] = useState("");
  const [taskCreating, setTaskCreating] = useState(false);

  const createTaskAction = async () => {
    setTaskCreating(true);
    await createTask(newTaskName);
    setTaskCreating(false);
    loadTasks();
    setNewTaskName("");
  };
  return (
    <div>
      <div id="wrapper">
        <div id="menu">
          <p className="welcome">Welcome!</p>
          <p className="logout">
            <Link id="exit" to="/chat">
              Exit Chat
            </Link>
          </p>
        </div>
        <div id="chatbox"></div>
        <form name="message" action="">
          <input
            name="usermsg"
            type="text"
            value={newTaskName}
            onChange={(event) => setNewTaskName(event.target.value)}
            id="new-task-name"
          />
          <button
            className="btn btn-success"
            disabled={taskCreating}
            onClick={createTaskAction}
            style={{ color: "black" }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
export default Chat;
