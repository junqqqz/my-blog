import React,{FC} from "react";
import { Space, Typography,Form,Input,Button, message } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styles from './Register.module.scss'
import { Link,useNavigate } from "react-router-dom";
import { useRequest } from "ahooks";
import { registerService } from "../services/user";
const {Title} = Typography;
const Register:FC =() =>{
    const nav = useNavigate()
    const {run} = useRequest(async values=>{
        const {username,password,nickname} = values;
        await registerService(username,password,nickname)
    },{
        manual:true,
        onSuccess(){
            message.success('注册成功')
            nav('/login')
        }
    })
    function onFinished(value:any) {
        run(value);
    }
    return <div className={styles.container}>
       <div>
        <Space>
             <Title level={2}><UserAddOutlined/></Title>
             <Title level={2}>注册新用户</Title>
        </Space>
       </div>
       <div>
          <Form labelCol={{span:6}} wrapperCol={{span:16}} onFinish={onFinished}>
            <Form.Item label="昵称" name="nickname">
                <Input/> 
            </Form.Item>
            <Form.Item label="用户名" name="uesrname" 
            rules={[
              {required: true, message: '请输入用户名'},
              
              ]}>
                <Input/>
            </Form.Item>
            <Form.Item 
              label="密码" 
              name="password"  
              rules={[{required:true,message:'请输入密码'}]}>
                <Input.Password/>
            </Form.Item>
            <Form.Item label="确认密码:" name="confirm" 
            rules={[
                {required:true,message:'请输入密码'},
                ({getFieldValue})=>({
                    validator(_,value) {
                        if(!value || getFieldValue('password')===value) {
                            return Promise.resolve()
                        }else {
                            return Promise.reject(new Error('两次密码不一致'))
                        }
                    }
                })
                ]}>
                <Input.Password/>
            </Form.Item>
           
            <Form.Item wrapperCol={{offset:8,span:16}}>
                <Space>
                    <Button type="primary" htmlType="submit">注册</Button>
                    <Link to={'/login'}>已有帐户，登录</Link>
                </Space>
            </Form.Item>
          </Form>
       </div>
    </div>
}

export default  Register;