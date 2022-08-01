import {useRef, useState} from "react";
import {useRouter} from "next/router";
import {Button, Form, Input} from "antd";
import style from './AddForm.module.css';
import {useDispatch} from "react-redux";
import {addTask} from "../../store/tasksSlice";

const AddForm = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const openAddForm = (condition)=> {
        setIsOpen(condition);
    }
    const taskTitle = useRef();
    const taskDescription = useRef();
    const onAddTask = async ()=> {
        setIsOpen(false);
        const data = {date: router.query.day, task: {title: taskTitle.current.input.value, description: taskDescription.current.resizableTextArea.props.value, status: "pending"}};
        const response = await fetch('http://localhost:4000/day/newTask', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        dispatch(addTask(json));
    }

    return (
        <>
            <Button type="primary"
                    className={isOpen ? style.hideForm :  style.showForm}
                    style={{backgroundColor: "#cccc41", border: "none", marginLeft: "50%", transform: "translateX(-50%)"}}
                    onClick={()=> openAddForm(true)}>
                Add Task
            </Button>
            <Form
                className={isOpen ? style.showForm :  style.hideForm}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 6}}
                initialValues={{remember: true}}
                autoComplete="off"
            >
                <Form.Item
                    label="Task title"
                    name="taskTitle"
                    rules={[{required: true, message: 'Please input your task title!'}]}
                >
                    <Input ref={taskTitle}/>
                </Form.Item>

                <Form.Item
                    label="Task description"
                    name="taskDescription"
                    rules={[{required: false, message: 'Please input your password!'}]}
                >
                    <Input.TextArea ref={taskDescription}/>
                </Form.Item>
                <Form.Item
                    wrapperCol={{offset: 11, span: 16}}
                >
                    <Button type="primary"
                            danger
                            onClick={()=> openAddForm(false)}>
                        Cancel
                    </Button>
                    <Button type="primary"
                            style={{backgroundColor: "#cccc41", border: "none", marginLeft: "30px"}}
                            onClick={() => onAddTask()}
                    >
                        Add Task
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddForm;