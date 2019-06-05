import state from "./state"
import {fromJS} from "immutable"
import {GET_HOME_INFO,CHANGE_ACTIVE_INDEX,CHANGE_SCROLL_FLAG} from "./const"


const reducer = (prevState=fromJS(state),action)=>{
    switch(action.type){
        case GET_HOME_INFO:
            return prevState.set("banners",action.banners).set("NavContent",action.NavContent)
                            .set("Content",action.Content).set("Specials",action.Specials)
        case CHANGE_ACTIVE_INDEX:
            return prevState.set("activeIndex",action.activeIndex)

        case CHANGE_SCROLL_FLAG:
            return prevState.set("scrollFlag",action.scrollFlag)
        default:
            return prevState
    }
}
export default reducer;