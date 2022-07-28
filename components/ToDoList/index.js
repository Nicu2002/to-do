import {List, Button, Badge} from 'antd';


const ToDoList = ({tasks}) => {
    const listHeight = tasks.length > 4 ? '50vh' : 'max-content';

    return (
        <List
            style={{marginLeft: "50%", transform: "translateX(-50%)", marginTop: "10vh", height: listHeight }}
            dataSource={tasks}
            split={false}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Button type="primary" key="list-item-details">Details</Button>,
                        <Button type="text"
                                style={{backgroundColor: "#36AE7C"}}
                                key="list-item-upgrade">Upgrade
                        </Button>,
                        <Button type="primary" danger key="list-item-delete">Delete</Button>
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