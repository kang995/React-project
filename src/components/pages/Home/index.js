import React,{Component}from 'react'
import './index.scss'
import {Route} from "react-router-dom"
import GroupState from '../../../modules/group';
//引入二级路由
import Index  from "./Hpage/Index"
import TvShopping  from "./Hpage/TvShopping"
import Bulk  from "./Hpage/Bulk"


class Home extends Component{
    componentDidMount(){
        this.initEvent();
    }
    initEvent(){
        //监听window.onscroll事件
        window.addEventListener("scroll",this.props.changeScrollFlag)
    }
    handTop(){
        //返回顶部
        window.scrollTo(0,0);
    }
    render(){
        let{scrollFlag} = this.props;
        // console.log(scrollFlag)
        return(
            <div>
               <Route path="/home/index" component={Index}/>
               <Route path="/home/tvShopping" component={TvShopping}/>
               <Route path="/home/bulk" component={Bulk}/>
               {
                    scrollFlag  ?   <div onClick={this.handTop} className="back-top" >
                                        <i className="fa fa-arrow-up"></i>
                                    </div>
                                    :null
               }
            </div>
        )
    }
}

export default GroupState(Home,{
    reducer:"home",
    states:["scrollFlag"]
});