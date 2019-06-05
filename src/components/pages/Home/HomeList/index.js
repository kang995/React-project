import React,{Component} from "react"
import {NavBar, Icon} from 'antd-mobile';
import qs from "querystring"

class HomeList extends Component{
    render(){
        // console.log(qs.parse(this.props.location.search.replace("?","")))
        let paramsObj = qs.parse(this.props.location.search.replace("?",""));
        return(
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    >
                    {paramsObj.title}
                </NavBar>
                <p>{paramsObj.subtitle}</p>
                <div>
                    <img width="100%" src={paramsObj.img} alt=""/>
                </div>
            </div>
        )
    }
}
export default HomeList;