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
            <Title>问卷调查 | 在线投票</Title>
            <Paragraph>已累计创建问卷100份,发布问卷90份,收到答卷980份</Paragraph>
            <div className={styles.button}>
                <Button type="primary" onClick={clickHandler} size="large" style={{height:'54px',lineHeight:'54px',width:'95px'}}>开始使用</Button>
            </div>
        </div>
      
    </div>
}

export default Home;