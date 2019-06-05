import React,{Component}from 'react'
import './index.scss'
import AppFooter from "../../../../commons/AppFooter"
import Banner from "../../Banner"
import NavContent from "../../NavContent"
import Content from "../../Content"
import NavBar from "../../NavBar"
// import Specials from "../../Specials"

class TvShopping extends Component{
    render(){
        return(
            <div className="t2">
               <AppFooter></AppFooter>
               <Banner></Banner>
               <NavBar></NavBar>
               <NavContent></NavContent>
               <Content></Content>
               {/* <Specials></Specials> */}
               
            </div>
        )
    }
}
export default TvShopping;