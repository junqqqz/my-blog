import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import styles from'./MainLayout.module.scss';
import Logo from '../components/Logo';
import UserInfo from "../components/UserInfo";
const {Header,Content,Footer} = Layout
const MainLayout:React.FC =() =>{
    return <Layout>
    <Header className={styles.header}>
      <div className={styles.left}><Logo/></div>
      <div className={styles.right}><UserInfo/></div>
    </Header>
    <Content className={styles.main}>
        <Outlet/>
    </Content>
    <Footer className={styles.footer}>小慕问卷 &copy;2024-present. Created by junqqqz</Footer>
    </Layout>
}

export default MainLayout;