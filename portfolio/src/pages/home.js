import React from "react"
import pinkMountains from "../Assets/pinkMountains.jpg"

const Home = () => {
    return (
       <> 
        <figure class="background-img">
            <img id="background-main-img" src={pinkMountains} alt='Mountains in Rocky Mountain National Park during sunset'/>
            <h2 id="backgroundh2">Welcome to my Portfolio!<br/> My name is Justin Phillips and I'm a fullstack web developer!</h2>
        </figure>
        </>
    )
}

export default Home;