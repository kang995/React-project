import React,{Component} from 'react'
import './index.scss'
import GroupState from "../../../../modules/group"
// import {NavLink} from "react-router-dom"
class NavContent extends Component{
   renderNavContent(){
    let {NavContent} = this.props;
    // console.log("1",NavContent);
    if(!NavContent) return "";
    return NavContent.map((item,index)=>{
        return(
            <div className="content" key={index}>
                <div className="contentImg">
                    <img src={item.contentList[0].item_image} alt=""/>
                </div>
                <p className="contentText">{item.contentList[0].conts_desc}</p>
            </div>
        )
    })
}
    render(){
        return(
            <div className="NavContent">
                {this.renderNavContent()}
            </div>
        )
    }
}
export default GroupState(NavContent,{
   reducer:"home",
   states:["NavContent"]
});