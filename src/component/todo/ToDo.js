import React, { useEffect, useState } from "react";
import "./todo.mouled.css";
const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDoInput, setToDoInput] = useState("");
  const [error, setError] = useState({
    mesg: "",
    status: false,
  });
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todo"));
    // console.log(data);
    setToDoList(data ? data : []);
    setError({ mesg: "Successfully ToDo List Loaded!", status: false });
  }, []);
  const toDoInputAdd = (e) => {
    const inp = e.target.value;
    setToDoInput(inp);
    setError({ mesg: "", status: false });
  };
  const addInput = (e) => {
    e.preventDefault();
    if (toDoInput) {
      if (!toDoList.includes(toDoInput)) {
        const newList = [...toDoList, toDoInput];
        setToDoList(newList);
        setError({ mesg: "Successfully Added!", status: false });
        localStorage.setItem("todo", JSON.stringify(newList));
        setToDoInput("");
      } else {
        setError({ mesg: "To Do Already Added!", status: true });
      }
    } else {
      setError({ mesg: "Enter Some Input!", status: true });
    }
  };
  const deletTodo = (name) => {
    const newArr = toDoList.filter((ele) => {
      return ele !== name;
    });
    setToDoList(newArr);
    localStorage.setItem("todo", JSON.stringify(newArr));
    setError({ mesg: "Successfully Removed!", status: false });
  };

  return (
    <div className="todo_outer">
      <div className="todo_inner">
        <div className="todo_header">
          <div className="todo_container">
            <h1>ToDo List</h1>
          </div>
        </div>
        <div className="todo_body">
          <div className="todo_container todo_body_container">
            <div className="todo_list">
              {toDoList.length !== 0 ? (
                toDoList.map((ele) => {
                  return (
                    <div className="todo_each" key={ele}>
                      <div className="todo_data">{ele}</div>
                      <button
                        className="todo_dlt_btn"
                        onClick={() => deletTodo(ele)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="todo_each_not">
                  <div className="todo_data_not">Todo Not Found</div>
                </div>
              )}
            </div>
            <div className="todo_add">
              <form className="todo_add_form" onSubmit={addInput}>
                <input
                  className="todo_input"
                  type="text"
                  value={toDoInput}
                  onChange={toDoInputAdd}
                  placeholder="Enter To Do"
                />
                <button className="todo_btn">Add</button>
              </form>
              <div className="todo_error">
                {error.mesg && error.status ? (
                  <p className="todo_error">{error.mesg}</p>
                ) : (
                  <p className="todo_no_error">{error.mesg}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
