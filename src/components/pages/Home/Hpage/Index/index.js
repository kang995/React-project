import React,{Component}from 'react'
import './index.scss'
import AppFooter from "../../../../commons/AppFooter"
import Banner from "../../Banner"
import NavContent from "../../NavContent"
import Content from "../../Content"
import NavBar from "../../NavBar"
import Specials from "../../Specials"

class Index extends Component{
    render(){
        return(
            <div className="t1">
               <AppFooter></AppFooter>
               <Banner></Banner>
               <NavContent></NavContent>
               <Content></Content>
               <Specials></Specials>
               <NavBar></NavBar>
            </div>
        )
    }
}

export default Index;