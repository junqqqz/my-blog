import React,{FC,useContext,useState,useEffect} from "react";
import { Space} from "antd";
import styles from './UserInfo.module.scss';
import { Link } from "react-router-dom";
import ThemeContext from "../store/ThemeContext";
import { getToken } from '../utils/user-token';
const UserInfo:FC =() =>{
    const {store} = useContext(ThemeContext);
    console.log(getToken());
    console.log(store.getState());
    const [num,setNum] = useState(0);
    const Token = getToken();
    const update = ()=>{
        setNum(num+1)
    }
    useEffect(()=>{
        const unSubScribe = store.subscribe(update);
        return ()=>{
            unSubScribe();
        }
    },[])
    return <div className={styles.container}>
    {!Token ? 
        <Space>
             <Link to='/login'>登录</Link>
        </Space>:<a>李华</a>
    }
        
       
    </div>
}

export default UserInfo;