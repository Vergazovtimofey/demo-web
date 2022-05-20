import Profile from "./Profile";
import React,{useEffect} from 'react'
import {connect} from "react-redux";
import {getProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAurhRedirect";
import {compose} from "redux";



const ProfileContainerHooks = (props)=> {
    let profileId = props.router.params.profileId

    useEffect(()=>{
        props.getProfile(profileId);
        props.getUserStatus(profileId);
    },[props.getUserStatus,profileId])

    if (!profileId) {
        profileId = props.authorizedUserId
    }


        return (<div>
                <Profile {...props} profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         getUserStatus={props.getUserStatus}/>
            </div>

        )
    }



let mapStateToProps = (state) => {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}



export default  compose(
    connect(mapStateToProps,{getProfile,getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect,
)(ProfileContainerHooks)


