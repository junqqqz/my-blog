import React,{FC} from "react";
import {useTitle} from 'ahooks';
import { Typography,Empty,Spin } from "antd";
import styles from './common.module.scss';
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData';
import ListPage from "../../components/ListPage";
const {Title} = Typography;
const Star:FC =() =>{
    useTitle('小慕问卷-星标问卷');
    const {data={},loading} = useLoadQuestionListData({isStar:true});
    const {list=[],total} = data;
    return  <> 
    <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>星标问卷</Title>
        </div>
            <ListSearch/>
        </div>
    <div className={styles.container}>
        {loading && (
            <div style={{textAlign:'center'}}>
                <Spin/>
            </div>
        )}
        {/* 问卷列表 */}
        {!loading &&(list.length ===0 && <Empty description='暂无数据' image={Empty.PRESENTED_IMAGE_SIMPLE} />) }
        {list.length>0 && list.map((q:any)=>{
                const {_id,isStar} = q;
                if(isStar) {
                    return <QuestionCard key={_id} {...q} />
                }
        })}
    </div>
    <div className={styles.footer}>
        <ListPage total={total}/>
    </div>
    
</>
      
}

export default Star;