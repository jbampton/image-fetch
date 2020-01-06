import React from 'react'
import {useSpring, animated} from 'react-spring'



export default function Image(props) {

    const [prop, set] = useSpring(() => ({ shadow: 0,opacity: 0.9, config: { mass: 1, tension: 170, friction: 26 } }))

    return (
        <div className="col-6 col-sm-3 p-3 text-center">
            <animated.div className="card hover">
                <img className="m-3 img-fluid align-self-center PixImage " src={props.Large} alt="" /> 
                    <div className="card-footer">
                        <small className="">Author: <strong>{props.Author}</strong></small>
                            <p className="fa-sm font-weight-light">Downloads: {props.Downloads}  <button className="btn btn-link  m-1" href={props.Large} onClick={() =>window.open(props.Large,'_blank')}><i className="fas fa-file-download" /></button></p>
                       
                    </div>
            </animated.div>
        </div>
    )
}