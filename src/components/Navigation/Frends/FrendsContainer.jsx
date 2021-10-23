import React from "react";
import {connect} from "react-redux";
import Friends from "./Frends";


const mapStateToProps = (state) => {
    return {
        sidebarData: state.sidebarPage.sidebarData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;