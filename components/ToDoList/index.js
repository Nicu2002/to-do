import {List, Button, Badge} from 'antd';
import useTodoListHook from "../../hooks/useTodoListHook";


const ToDoList = ({tasks}) => {
    const {listHeight, onDone, onDelete} = useTodoListHook(tasks);
    return (
        <List
            style={{marginLeft: "50%", transform: "translateX(-50%)", marginTop: "10vh", height: listHeight, overflowY: 'scroll' }}
            dataSource={tasks}
            split={false}
            renderItem={(item) => (
                <List.Item
                    key={item._id}
                    actions={[
                        <Button type="text"
                                onClick={()=> onDone(item._id, item.status)}
                                style={{backgroundColor: "#36AE7C"}}
                                key="list-item-upgrade">Done
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