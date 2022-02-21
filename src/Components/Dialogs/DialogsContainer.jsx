import { connect } from "react-redux";
import {setMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    debugger
    return {
        dialogsPage: state.dialogsPage,
        messages: state.dialogsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMessage: (messages) => {
            dispatch(setMessage(messages))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs) 