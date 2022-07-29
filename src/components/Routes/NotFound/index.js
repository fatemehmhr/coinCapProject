import './NotFound.scss';
import { Layout } from 'antd';

const {Content} = Layout;

export const NotFound = () => {
    return(
        <>
            <Content style={{display:'flex',margin:'150px 0 ',alignItems:' center'}} >
              <div className="notFound">
                 <p>NOT FOUND</p>
              </div>
            </Content>
        </>
    )
}