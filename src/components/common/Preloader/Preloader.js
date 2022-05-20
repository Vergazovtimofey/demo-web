import React from 'react'
import preloader from './../../../assets/images/loader.svg'

const Preloader = (props) => {
    return(
        <div>
            <img src={preloader} style={{position:"relative", top:'200px', left: '400px'}} alt=""/>
        </div>
    )

}
export default Preloader