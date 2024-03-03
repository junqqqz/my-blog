import React,{FC} from 'react';
import QuestionCard from '../../components/QuestionCard';
import { Spin, Typography } from 'antd';
import styles from './common.module.scss';
import { useTitle} from 'ahooks';
// import { getQuestionListService } from '../../services/question';
import ListSearch from '../../components/ListSearch';
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData';
const {Title} = Typography;
const List :FC = () => {
    useTitle('小慕问卷-我的问卷');
    const {data={},loading} = useLoadQuestionListData();
    const {list=[]} = data;
    // const [list,setList] = useState([]);
    // const [total,setTotal] = useState(0);
    // useEffect(()=>{
    //     async function load() {
    //       const data = await getQuestionListService();
    //       const {list=[],total=0} = data;
    //       setList(list);
    //       setTotal(total);
    //     }
    //     load();
    // },[])
    return <>
    <div className={styles.header}>
        <div className={styles.left}>
            <Title level={3}>我的问卷</Title>
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
            {!loading && list.length>0 && list.map((q:any)=>{
                const {_id} = q;
                return <QuestionCard key={_id} {...q} />
            })}
        </div>
    <div className={styles.footer}>loadmore 上滑加载更多... </div>
 </>
}

export default List;