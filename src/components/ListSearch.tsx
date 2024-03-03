import React,{FC,ChangeEvent,useState, useEffect} from "react";
import { useNavigate,useLocation, useSearchParams } from "react-router-dom";
import { Input } from "antd";

const {Search} = Input;

const ListSearch:FC =()=>{
    const nav = useNavigate();
    const {pathname} = useLocation();
    const [value,setValue] = useState('');
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setValue(event.target.value);
    }
    const [searchParams] =useSearchParams();
    useEffect(()=>{
        const curVal = searchParams.get('keyword') || ''
        setValue(curVal);
    },[searchParams])
    function handleSearch(value:string) {
        nav({
            pathname,
            search:`keyword=${value}`,
        })
    }
    return <>
      <Search 
        placeholder="请输入关键字" 
        value={value}
        style={{width:'200px'}}
        onChange={handleChange}
        onSearch={handleSearch}
        allowClear  
        />
    </>
}

export default ListSearch;