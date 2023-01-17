import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        if (value.trim().length === 0)
        {
            alert("Enter a task before adding!!");
            setValue("");
            return;
        }

        dispatch(
            addTask({
                task: value
            })
        );

        setValue("");
    };

    return(
        <div>
            <input
            type="text"
            className="task-input"
            placeholder="Add Task"
            value={value}
            onChange={(e) => setValue(e.target.value)}>
            </input>

            <button className="task-button" onClick={onSubmit}>Save</button>
        </div>
    );
};

export default AddTodo;