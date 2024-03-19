import React,{FC, useEffect} from "react";
import { useNavigate} from "react-router-dom";
import { Button, Typography } from "antd";
import styles from './Home.module.scss'
const {Title,Paragraph}  = Typography;
const Home:FC =() =>{
    const nav = useNavigate();
    useEffect(()=>{
        fetch('/api/test')
        .then(res=>res.json())
        .then(data=>console.log('fetch data',data))
    })
    function clickHandler() {
        nav('/login')
    }
    return <div className={styles.container}>
        <div className={styles.info}>
            <Title level={2}>基于Ant desgin组件库打造的一款个人博客管理系统</Title>
            <Paragraph></Paragraph>
            <div className={styles.button}>
                <Button type="primary" onClick={clickHandler} size="large" style={{height:'54px',lineHeight:'54px',width:'95px'}}>开始使用</Button>
            </div>
        </div>
      
    </div>
}

export default Home;