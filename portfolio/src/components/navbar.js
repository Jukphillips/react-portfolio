import React from "react"

const NavBar = ({props}) => {

    const {page, setPage} = props;
    return (
       <> 
        <header class="Top-header" id="Top-header">
            <h1 id="simpleHeader"> Simple's Portfolio </h1> 
            <nav>
                <ul>   
                    <li>
                        <a onClick={() => setPage(0)}>Home</a>
                    </li>
                    <li>
                        <a onClick={() => setPage(1)}>About Me</a>
                    </li>
                    <li>
                        <a onClick={() => setPage(3)}>Work</a>
                    </li>
                    <li>
                        <a onClick={() => setPage(2)}>Contact Me</a>
                    </li>
                </ul>
            </nav> 
        </header>
    </>
    )
}

export default NavBar;