import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actionCreators from "./actionCreators"
const GroupState = (UIComponent,options)=>{
    return connect(state=>{
        let {reducer,states} = options;
        let _state = {}
        states.forEach(item=>{
            _state[item] = state.getIn([reducer,item]);
        })
        return _state; //{banners:banners的值}
    },dispatch=>{
        return bindActionCreators(actionCreators[options.reducer],dispatch)
    })(UIComponent)
}
export default GroupState;