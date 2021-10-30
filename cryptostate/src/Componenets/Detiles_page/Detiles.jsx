import React from 'react'
import { useLocation } from 'react-router'

function Detiles() {

    const loaction = useLocation()

    console.log(loaction.state.owner)

    return (
        <div>
            <img src={loaction.state.Image}alt="" />
            this is router
        </div>
    )
}

export default Detiles
