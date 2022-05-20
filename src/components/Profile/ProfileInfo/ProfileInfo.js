import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import photo from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

  return(
      <div>
          <div>
              <img className={s.imgContent} src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt=""/>
          </div>
          <div className={s.user}>
              <img className={s.imgContent1} src={props.profile.photos.large == null ? photo : props.profile.photos.large}  alt=""/>
              <div className={s.about}>
                  <div className={s.name}>
                     Имя {props.profile.fullName}
                  </div>

                  <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}
                                 getUserStatus={props.getUserStatus}/>

                  <div className={s.name}>
                      {props.profile.contacts.vk}
                  </div>
                  <div className={s.name}>
                      {props.profile.lookingForAJobDescription}
                  </div>
              </div>
          </div>
      </div>
  )
}
export default ProfileInfo