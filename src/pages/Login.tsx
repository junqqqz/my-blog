import React,{FC} from "react";
import { Space, Typography,Form,Input,Button, Checkbox } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styles from './Login.module.scss'
import { Link } from "react-router-dom";
const {Title} = Typography;
const Login:FC =() =>{
    function onFinished(value:any) {
        console.log(value);
    }
    return <div className={styles.container}>
      <div>
        <Space>
             <Title level={2}><UserAddOutlined/></Title>
             <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
         <Form
          labelCol={{span:6}}
          wrapperCol={{span:16}}
          onFinish={onFinished}
          initialValues={{remember:true}}>
            <Form.Item label="用户名" name="username">
                <Input/>
            </Form.Item>
             <Form.Item label="密码" name="password">
                <Input.Password/>
            </Form.Item>
            <Form.Item wrapperCol={{offset:6,span:16}} name="remember" valuePropName="checked">
                <Checkbox>记住我</Checkbox>
            </Form.Item>
             <Form.Item wrapperCol={{offset:6,span:16}}>   
                <Space>
                    <Button type="primary" htmlType="submit">登录</Button>
                    <Link to='/register'>注册新用户</Link>
                </Space>
                
            </Form.Item>
         </Form>
       </div>
</div>
}

export default Login;