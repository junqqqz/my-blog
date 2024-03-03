import React,{FC,useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';
import styles from './QuestionCrad.module.scss';
import {useRequest} from 'ahooks';
import { Space,Button, Popconfirm,Modal,message,Tag} from 'antd';
import { CopyOutlined, DeleteOutlined, EditOutlined, ExclamationCircleFilled, LineChartOutlined, StarOutlined } from '@ant-design/icons';
import { duplicateQuestionService, updateQuestionService } from '../services/question';
type PropsType = {
    _id :string,
    title:string,
    isPublished:boolean,
    isStar:boolean,
    answerCount:number,
    createAt:string
}
const {confirm} = Modal;
const QuestionCard:FC<PropsType> = (props:PropsType) =>{
    const {_id,title,createAt,answerCount,isPublished,isStar} = props;
    const [isStarState,setIsStarState] = useState(isStar);

    //问卷标星功能
    const {loading:changeStarLoading,run:changeStar} = useRequest(async()=>{
        await updateQuestionService(_id,{isStar:!isStarState})

    },{
        manual:true,
        onSuccess() {
            setIsStarState(!isStarState) //更新State
            message.success('已设置')
        }
    })
    //问卷复制功能
    const {loading:duplicateLoading,run:duplicate} = useRequest(
        async()=>{
            const data = await duplicateQuestionService(_id);
            return data;
        },{
            manual:true,
            onSuccess(result:any) {
                message.success('复制成功')
                nav(`/question/edit/${result.id}`)  //跳转到问卷编辑页
            }
        }
    )
    const nav = useNavigate();
    const del = () =>{
        confirm({
            title:'确定删除该问卷？',
            icon:<ExclamationCircleFilled/>,
            onOk:()=> message.success('删除成功')
        })
    }
    return <div className={styles.container}>
       <div className={styles.title}>
        <div className={styles.left}>
            <Link to={isPublished?`/question/stat/${_id}`:`/question/edit/${_id}`}>
                <Space>
                    {isStarState && <StarOutlined style={{color:'red'}}/>}
                    {title}
                </Space>
            </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished?<Tag color="processing">已发布</Tag> :<Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
       </div>
       <div className={styles['button-container']}>
        <div className={styles.left}>
            <Space>
                <Button icon={<EditOutlined/>} type='text' size='small'
                   onClick={()=>nav(`/question/edit/${_id}`)}>
                    编辑问卷</Button>
                <Button icon={<LineChartOutlined/> } type='text' size='small'
                   onClick={()=>nav(`/question/stat/${_id}`)} disabled={!isPublished}>
                    问卷统计</Button>
            </Space>
        </div>
        <div className={styles.right}>
        <Space>
            <Button type='link' icon={<StarOutlined/>} size='small' onClick={changeStar} disabled={changeStarLoading}>
                {isStarState?'取消标星':'标星'}
            </Button>
          <Popconfirm title='确定复制该问卷？' okText='是' cancelText='否' onConfirm={duplicate}> 
            <Button type='link' icon={<CopyOutlined/>} size='small' disabled={duplicateLoading}>
                复制
            </Button>
          </Popconfirm>
            <Button type='link' icon={<DeleteOutlined/>} size='small' onClick={del}>
                删除
            </Button>
        </Space>
        </div>
       </div>
    </div>

}

export default QuestionCard;