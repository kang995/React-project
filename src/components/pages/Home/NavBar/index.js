import React,{Component}from 'react'
import './index.scss'
// import Swiper from "swiper"
import GroupState from "../../../../modules/group"
import {withRouter} from "react-router-dom"
class NavBar extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
   //监控路由的变化
//    componentWillReceiveProps(props){
//         console.log(1111)
//         let {location} = props;
//         let index = 0;
//         switch (location.pathname) {
//             case "/home/index":
//                 index = 0;
//                 break;
//             case "/home/tvShopping":
//                 index = 1;
//                 break;
//             case "/home/bulk":
//                 index = 2;
//                 break;
//             default:
//                 break;
//         }
//         this.props.changeActiveIndex(index)
//     }
    handleClick(e){
        let index =  e.currentTarget.getAttribute("index");
        let {history} = this.props;
        switch (index) {
            case "0":
                history.replace("/home/index")
            break;
            case "1":
                history.replace("/home/tvShopping")
                break;
            case "2":
                history.replace("/home/bulk")
                break;
            default:
                break;
        }
    }
    renderNavBar(){
        let{navs} = this.props;
        if(!navs) return "";
        let{activeIndex} = this.props;
        // console.log("1",navs);
        return(
           navs.map((item,index)=>{
               return(
                <div 
                     key={item.id}
                     className={"slide "+ (activeIndex===index?'active':'')}
                     onClick={this.handleClick}
                     index={index}
                >
                    <span>{item.title}</span>
                </div>
               )
           })
        )
    }
    render(){
       return(
           <div className="home-Box">
                <div className="home-header">
                    <div className="btn">
                        <i className="fa fa-navicon"></i>
                        <span>分类</span>
                    </div>
                    <input type="text" defaultValue="搜索货号/关键词"/>
                    <i className="fa fa-search tu"></i>
                </div>
                <div className="home-navbar">
                    {this.renderNavBar()}
                    {/* <NavLink to="/home/index">
                        <span>首页</span>
                    </NavLink>
                    <NavLink to="/home/tvShopping">
                        <span>TV购物</span>
                    </NavLink>
                    <NavLink to="/home/bulk">
                        <span>团购</span>
                    </NavLink> */}
                </div>
            </div>
       )
    }
}
NavBar.defaultProps = {
    navs:[
      {id:0,path:"/home/index",title:"首页"},
      {id:1,path:"/home/tvShopping",title:"TV购物"},
      {id:2,path:"/home/bulk",title:"团购"}
    ]
  }

export default GroupState(withRouter(NavBar),{
    reducer:"home",
    states:["activeIndex"]
});
