import React,{FC} from "react";
import styles from './Edit.module.scss';
import MyEditor from "./EditTor";
const Edit:FC =() =>{
    return <>
      <div className={styles.container}>
        <div className={styles.main}>
          <h2>发布文章</h2>
          <div>
            <span>标题:</span>
            <input/>
            <div>
                <span>频道:</span>
              <select>
                <option value="">前端</option>
                <option value="">后端</option>
                <option value="">测试</option>
                <option value="">运维</option>
              </select>
            </div>
            <div>
                <label htmlFor="img">封面</label>
                <label htmlFor="img" className={styles.place}>+</label>
                <input className="img-file" type="file" name="img" id="img" hidden></input>
                <img className="rounded"></img>
            </div>
            <div>
              <span>内容:</span>
              <MyEditor/>
            </div>
          </div>
        </div>
      </div>
    </>
}

export default Edit;
