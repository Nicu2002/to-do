import {Button, Form, Input} from "antd";
import style from './AddForm.module.css';
import useAddFormHook from "../../hooks/useAddFormHook";


const AddForm = () => {
    const {isOpen, openAddForm, taskTitle, taskDescription, onAddTask} = useAddFormHook();
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