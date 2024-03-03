import React,{FC,useState} from "react";
import {useTitle} from 'ahooks';
import { Typography,Empty, Table,Tag,Button,Space,Modal,Spin } from "antd";
import styles from './common.module.scss';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ListSearch from "../../components/ListSearch";
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData';
import ListPage from "../../components/ListPage";
const {Title} = Typography;
const {confirm} = Modal;
const Trash:FC =() =>{
    useTitle('小慕问卷-回收站');
    const [selectedIds,setSelectedIds] = useState<string[]>([]);
    const tableColumns =[
        {
            title:'标题',
            dataIndex:'title',
            //key :'title,循环列的key,他会默认取 dataIndex
        },
        {
            title:'是否发布',
            dataIndex:'isPublished',
            render:(isPublished:boolean) =>{
                return isPublished?<Tag color="processing">已发布</Tag> :<Tag>未发布</Tag>
            }
        },
        {
            title:'答卷数量',
            dataIndex:'answerCount',
        },
        {
            title:'创建时间',
            dataIndex:'createAt',
        }
    ]
    const {data={},loading} = useLoadQuestionListData({isDeleted:true});
    const {list=[],total} = data;
    const del = ()=>{
        confirm({
            title:'彻底是否删除该问卷吗?',
            icon:<ExclamationCircleOutlined/>,
            content:'删除后无法找回',
            onOk:()=> alert(`删除${JSON.stringify(selectedIds)}`)


        })
    }
    const TableElement = <>
    <div style={{marginBottom:'16px'}}>
      <Space>
        <Button type="primary" disabled={selectedIds.length ===0}>恢复</Button>
        <Button disabled={selectedIds.length ===0} danger onClick={del}>彻底删除</Button>
      </Space>
    </div>
         <Table 
         rowSelection={{
            type:'checkbox',
            onChange:selectRowKeys=>{
                setSelectedIds(selectRowKeys as string[]);
            }
        }}
        dataSource={list} 
        columns={tableColumns} 
        rowKey={q=>q._id}
        />  
</>
    return  <>
    <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>回收站</Title>
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
        {!loading && list.length ===0 && <Empty description='暂无数据' image={Empty.PRESENTED_IMAGE_SIMPLE} /> }
        {list.length>0 && TableElement}
    </div>
    <div className={styles.footer}>
        <ListPage total={total}/>
    </div>
    
</>
      
}

export default Trash;