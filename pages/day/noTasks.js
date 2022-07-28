import {HomeOutlined} from "@ant-design/icons";
import {useRouter} from "next/router";
import AddForm from "../../components/AddForm";

const NoTask = () => {
    const router = useRouter();

    return (
        <>
            <HomeOutlined onClick={()=> router.push("/")} style={{fontSize: "30px", cursor: "pointer", margin: "20px 40px"}}/>
            <div style={{fontSize: "72px", marginLeft: "50%", transform: "translateX(-50%)", width:"max-content", marginTop: "20vh"}}>
                No taskss
            </div>
            <AddForm/>
        </>
    );
};

export default NoTask;