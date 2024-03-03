import React,{FC} from "react";
import { Outlet,useNavigate,useLocation } from "react-router-dom";
import styles from './ManageLayout.module.scss';
import { Button, Flex, message } from "antd";
import { createQuestionService } from "../services/question";
import {BarsOutlined, DeleteOutlined, PlusOutlined, StarOutlined} from '@ant-design/icons';
import { useRequest } from 'ahooks';
const ManageLayout:FC =() =>{
    const nav = useNavigate();
    const {pathname} = useLocation();
    const {
    loading,
    // error,
    run: handleCreateClick,
  } = useRequest(createQuestionService, {
    manual: true,
    onSuccess(result) {
      nav(`/question/edit/${result.id}`)
      message.success('创建成功')
    },
  })
    return <div className={styles.container}>
        <div className={styles.left}>
          <Flex vertical gap="small" style={{width:'100%'}}>
            <Button block 
            type="primary" 
            icon={<PlusOutlined/>}
            onClick={handleCreateClick}
            disabled={loading} >创建问卷</Button>
            <Button block 
            type={pathname.startsWith('/manage/List')?'default':'text'} 
            icon={<BarsOutlined/>} 
            onClick={()=>nav('/manage/List')}>我的问卷</Button>

            <Button block 
            type={pathname.startsWith('/manage/Star')?'default':'text'} 
            icon={<StarOutlined/>} 
            onClick={()=>nav('/manage/Star')}>星标问卷</Button>

            <Button block 
            type={pathname.startsWith('/manage/Trash')?'default':'text'} 
            icon={<DeleteOutlined/>} 
            onClick={()=>nav('/manage/Trash')}>回收站</Button>
          </Flex>
        </div>
        <div className={styles.right}>
            <Outlet/>
        </div>
    
   </div>
}

export default ManageLayout;