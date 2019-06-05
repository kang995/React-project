import React,{Component} from 'react';
import{
  Buycar,
  Home,
  List,
  Mine
} from "./components/pages"
import {Route,Switch,withRouter,Redirect} from "react-router-dom"
import GroupState from './modules/group';
//引入HomeList组件
import HomeList from "./components/pages/Home/HomeList"

class App extends Component{
  //切换至home组件时，显示/home/index组件
  componentWillReceiveProps(props){
    if(props.location.pathname==="/home"){
      props.history.replace("/home/index")
    }
    //navBar
    let {location} = props;
    let index = 0;
    switch (location.pathname) {
        case "/home/index":
            index = 0;
            break;
        case "/home/tvShopping":
            index = 1;
            break;
        case "/home/bulk":
            index = 2;
            break;
        default:
            break;
    }
    this.props.changeActiveIndex(index)
  }
  renderRoute(){
    let {navs} = this.props;
    return(
      <Switch>
          {
            navs.map(item=>{
                return <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
            })
          }
           {<Redirect to="/home/index"/>}
      </Switch>
    )
  }
    render(){
        return(
          <div className="App">
             {this.renderRoute()}
         </div>
        )
    }
}

App.defaultProps = {
  navs:[
    {id:1,path:"/home",component:Home},
    {id:2,path:"/list",component:List},
    {id:3,path:"/buycar",component:Buycar},
    {id:4,path:"/mine",component:Mine},
    {id:5,path:"/homelist/",component:HomeList} //query传参的方式
  ]
}

export default GroupState(withRouter(App),{
  reducer:"home",
  states:["scrollFlag"]
});
