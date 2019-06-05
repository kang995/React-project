import React,{Component} from "react"
import "./index.scss";
import {NavLink} from "react-router-dom"

class AppFooter extends Component{
    renderFooter(){
        let{navs} = this.props;
        return navs.map(item=>{
            return(
                <NavLink key={item.id} to={{pathname:item.path}} exact={item.exact}>
                    <i className={"fa fa-"+item.icon}></i>
                    <span>{item.title}</span>
                </NavLink>
            )
        })
    }
    render(){
        return(
            <div className="App-footer">
                {this.renderFooter()}
            </div>
        )
    }
}
AppFooter.defaultProps = {
    navs:[
        {id:1,title:"首页",icon:"home",path:"/home",exact:true},
        {id:2,title:"列表",icon:"list",path:"/list"},
        {id:3,title:"购物袋",icon:"shopping-cart",path:"/buycar"},
        {id:4,title:"我的",icon:"home",path:"/mine"},
    ]
}

export default AppFooter;