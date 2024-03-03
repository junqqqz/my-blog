import React,{FC} from "react";
import { Space} from "antd";
import styles from './UserInfo.module.scss';
import { Link } from "react-router-dom";
const UserInfo:FC =() =>{
    return <div className={styles.container}>
        <Space>
             <Link to='/login'>登录</Link>
        </Space>
       
    </div>
}

export default UserInfo;