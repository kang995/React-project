import React,{Component}from 'react'
import './index.scss'
import GroupState from "../../../../modules/group"
class Specials extends Component{
    renderSpecials(){
        let {Specials} = this.props;
        // console.log("Specials",Specials)
        if(!Specials) return "";
        return Specials.map((item,index)=>{
            return (
                <div style={{width:"100%"}} key={index}>
                    <div className="Spacials-Top">
                        {
                            item.mobile_tag_txt ?
                            <div className="hindex-Top">
                                 <span>{item.mobile_tag_txt}</span>
                            </div> 
                            :null
                        }
                        <div className="hindex-center">
                            <img src={item.item_image} alt=""/>
                        </div>
                        <div className="hindex-bottom">
                            <img src={item.brand_url} alt=""/>
                        </div>
                    </div>
                    <div className="Spacials-Bottom">
                        <div className="Spacials-Bot-top">
                            {item.item_name}
                        </div>
                        <div className="Spacials-Bot-Bot">
                            <div className="tipBox">
                                <p>￥{item.last_sale_price}</p>
                               {item.cust_price ? <span>￥{item.cust_price}</span> :null}
                                <i>积</i>
                            </div>
                            {   item.co_dc ?
                                <div className="kouBox">{item.co_dc}折</div>
                                :null
                            }
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        return(
            <div className="SpecialsBox"> 
                  {this.renderSpecials()}
            </div>
        )
    }
}
export default GroupState(Specials,{
    reducer:"home",
    states:["Specials"]
});