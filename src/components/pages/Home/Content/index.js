import React,{Component}from 'react'
import './index.scss'
import GroupState from "../../../../modules/group"
// import {Switch} from "react-router-dom"
import {NavLink} from "react-router-dom"
class Content extends Component{
    renderContent(){
        let{Content} = this.props;
        if(!Content) return "";
        // console.log("2",Content)
        return Content.map((item,index)=>{
            return(
               <div  key={index}>
                    <NavLink to={{
                        pathname:"/homelist/",
                        search:"title="+item.alt_desc+"&subtitle="+item.conts_desc+"&img="+item.item_image
                    }} className="content-Top">
                        <img src={item.item_image} alt=""/>
                    </NavLink>
                    <div className="content-Bottom">
                        <p>{item.alt_desc}</p>
                        <span>{item.conts_desc}</span>
                    </div>
               </div>
            )
        })
    }
    render(){
        return(
            <div className="ContentBox">
                {this.renderContent()}
            </div>
        )
    }
}
export default GroupState(Content,{
    reducer:"home",
    states:["Content"]
});