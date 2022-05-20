import './App.css';
import React, {lazy} from 'react'
import Navbar from "./components/Nav/Navbar";
import { Routes, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainerHooks from "./components/Users/UsersContainerHooks";
import ProfileContainerHooks from "./components/Profile/ProfileContainerHooks";
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));



const App = (props) =>{

    useEffect(() => {
        props.initializeApp();
    }, [])
    if (!props.initialized) {
        return <Preloader/>
    }


  return (

        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar />
            <div className='appWrapperContent'>
                <React.Suspense fallback={<div>Loading</div>}>
                <Routes>
                        <Route path='/profile/:profileId' element={ <ProfileContainer />}/>
                        <Route path='/profile/*' element={ <ProfileContainer />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/users' element={<UsersContainerHooks/>}/>
                        <Route path='/login' element={<Login/>}/>
                </Routes>
                </React.Suspense>
            </div>
        </div>



  );
}

const mapStateToProps=(state)=>{
    return{
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeApp})(App)
