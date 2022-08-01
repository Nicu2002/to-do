import {List, Button, Badge} from 'antd';
import {useDispatch} from "react-redux";
import {deleteTask} from "../../store/tasksSlice";
import {useRouter} from "next/router";


const ToDoList = ({tasks}) => {
    const dispatch = useDispatch();
    const listHeight = tasks.length > 4 ? '38vh' : 'max-content';
    const router = useRouter()

    const onDelete = (id) => {
        const data = {date: router.query.day, id, tasks};
        fetch('http://localhost:4000/day/deleteTask', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
            },
            body: JSON.stringify(data)
        })
        dispatch(deleteTask(id));
    }

    return (
        <List
            style={{marginLeft: "50%", transform: "translateX(-50%)", marginTop: "10vh", height: listHeight, overflowY: 'scroll' }}
            dataSource={tasks}
            split={false}
            renderItem={(item) => (
                <List.Item
                    key={item._id}
                    actions={[
                        <Button type="primary" key="list-item-details">Details</Button>,
                        <Button type="text"
                                style={{backgroundColor: "#36AE7C"}}
                                key="list-item-upgrade">Upgrade
                        </Button>,
                        <Button type="primary" danger key="list-item-delete" onClick={()=> onDelete(item._id)}>Delete</Button>
                    ]}
                >
                    <List.Item.Meta
                        avatar={item.status === "done" ? <Badge color="#36AE7C"/> : <Badge color="#cccc41"/>}
                        title={<a href="#">{item.title}</a>}
                        description={item.description}
                    />
                </List.Item>
            )}>
        </List>
    );
};

export default ToDoList;