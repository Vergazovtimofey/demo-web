import profSt from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useParams} from "react-router-dom";



const Profile = (props) => {

    return(
        <div className={profSt.content}>
           <ProfileInfo profile={props.profile} status={props.status}
                        updateUserStatus={props.updateUserStatus} getUserStatus={props.getUserStatus}/>
            <MyPostsContainer />
        </div>

    )

}

export default Profile