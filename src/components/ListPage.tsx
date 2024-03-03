import React,{FC,useEffect,useState} from "react";
import { Pagination } from "antd";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
type PropTypes = {
    total:number,
}
const ListPage:FC<PropTypes> =(props:PropTypes) =>{
    const [current,setCurrent] = useState(1);
    const [pageSize,setPageSize] = useState(10);

    //从url参数中找到page pageSize,并且同步到Pagination组件中
    const [searchParams] = useSearchParams()
    useEffect(()=>{
        const page = parseInt(searchParams.get('page')||'')||1;
        const pageSize = parseInt(searchParams.get('pageSize')||'')||10;
        setCurrent(page);
        setPageSize(pageSize);
    },[searchParams])
    //当 page pageSize改变时，跳转页面（改变url）
    const nav = useNavigate();
    const {pathname} = useLocation()
    function handlePageChange(page:number,pageSize:number) {
        searchParams.set('page',page.toString());
        searchParams.set('pageSize',pageSize.toString())
        nav({
            pathname,
            search:searchParams.toString(),
        })
    }
    const {total} = props;
    return <Pagination total={total} current={current} pageSize={pageSize} onChange={handlePageChange}/>
}

export default ListPage;