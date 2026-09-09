import { useState } from "react";

export default function ListTasks() {
  const [allTasks, setAllTasks] = useState([
    {
      taskId: 1,
      taskName: "Fill Petrol",
      taskStatus: false,
    },
    {
      taskId: 2,
      taskName: "Laundry",
      taskStatus: false,
    },
    {
      taskId: 3,
      taskName: "Call Friend",
      taskStatus: false,
    },
  ]);

  function deleteTask(taskId) {
    console.log(taskId);
    let copyAllTasks = [...allTasks];
    for (let i = 0; i < copyAllTasks.length; i++) {
      if (copyAllTasks[i].taskId == taskId) {
        copyAllTasks.splice(i, 1);
        break;
      }
    }
    setAllTasks(copyAllTasks);
  }

  function editTask(taskId) {
    let copyAllTasks = [...allTasks];
    for (let i = 0; i < copyAllTasks.length; i++) {
      if (copyAllTasks[i].taskId == taskId) {
        copyAllTasks[i] = {
          ...copyAllTasks[i],
          taskStatus: true,
        };
        break;
      }
    }
    setAllTasks(copyAllTasks);
  }

  return (
    <>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <td>ID</td>
            <td>TASK</td>
            <td>STATUS</td>
            <td>CHANGE STATUS</td>
            <td>REMOVE</td>
          </tr>
        </thead>
        <tbody>
          {allTasks.map((eachTask) => (
            <tr key={eachTask.taskId}>
              <td>{eachTask.taskId}</td>
              <td>{eachTask.taskName}</td>
              <td>
                {eachTask.taskStatus ? (
                  <span className="badge rounded-pill bg-success">
                    Completed
                  </span>
                ) : (
                  <span className="badge rounded-pill bg-warning">Pending</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary btn-rounded text-light"
                  onClick={() => editTask(eachTask.taskId)}
                >
                  Mark
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger text-light"
                  onClick={() => deleteTask(eachTask.taskId)}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
