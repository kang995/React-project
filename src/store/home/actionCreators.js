import {Get} from "../../modules/axios-util"
import {GET_HOME_INFO,CHANGE_ACTIVE_INDEX,CHANGE_SCROLL_FLAG} from "./const"
export default {
    getHomeInfo(callback){
        return dispatch=>{
            Get({
                url:"/mt/commonCornersData?shop_num=7781&corner_nums%5B%5D=9541&corner_nums%5B%5D=11221&corner_nums%5B%5D=9544&corner_nums%5B%5D=9545&corner_nums%5B%5D=9681&corner_nums%5B%5D=11161&corner_nums%5B%5D=12081&auth_key=&prev_yn=N&prev_std_dt=&seq_shop_num=&prev_seq_temp_num="
            }).then(res=>{  
                let banners = res.data[0].setList[0].contentList;
                // console.log(res.data[0])
                let NavContent = res.data[1].setList;
                // console.log (res.data[1])
                let Content = res.data[3].setList[0].contentList
                let Specials = res.data[2].setList[0].contentList
                // console.log(Specials)
                // console.log(banners)
                dispatch({type:GET_HOME_INFO,banners,NavContent,Content,Specials})
                callback&&callback()
            })
        }
    }, 
    changeActiveIndex(activeIndex){
        return {type:CHANGE_ACTIVE_INDEX,activeIndex}
    },
    changeScrollFlag(){
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop>400){
            return {type:CHANGE_SCROLL_FLAG,scrollFlag:true}
        } else{
            return {type:CHANGE_SCROLL_FLAG,scrollFlag:false}
        }
    },
    // getNavContent(callback){
    //     return dispatch=>{
    //         Get({
    //             url:"/shortvideo/dfcyx_list?domain_id=7781_6481_9544_1_12009_WASTE"
    //         }).then(res=>{
    //             // console.log(res)
    //         })
    //     }
    // }
}