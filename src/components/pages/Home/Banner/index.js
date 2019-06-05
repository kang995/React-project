import React,{Component} from "react"
import "./index.scss"
import GroupState from "../../../../modules/group"
import Swiper from "swiper"
class Banner extends Component{
    componentDidMount(){
        let {banners} = this.props;
        if(banners){
            this.initSwiper()
            return false;
        }
        this.props.getHomeInfo(()=>{
            this.initSwiper();
        })
    }
    initSwiper(){
        new Swiper(".home-banner",{
            loop:true,
            pagination:{
                el:".swiper-pagination"
            },
            autoplay:true,
        })
    }
    renderSlide(){
        let {banners} = this.props;
        if(!banners) return "";
        return banners.map((item,index)=>{
            return (
                <div key={index} className="swiper-slide">
                    <img width="100%" src={item.item_image} alt=""/>
                </div> 
            )
        })
    }
    render(){
        // console.log("banners",this.props) //1.banners=null 初始化执行打印一次  2.banners有数据了打印一次 3.navs有数据了 打印一次
        return (
            <div className="home-banner swiper-container">
                <div className="swiper-wrapper">
                    {this.renderSlide()}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}
// export default HomeGroup(Banner,["banners"]);
export default GroupState(Banner,{
    reducer:"home",
    states:["banners"]
})