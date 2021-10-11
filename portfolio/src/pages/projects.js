
import placeholder from "../Assets/Javascript.PNG"
import firstproject from "../Assets/firstproject.PNG"
import sideswipe from "../Assets/Capture.PNG"

const Projects = () => {
    return (
       <> 
    <main class="work marginWork" id="work" >
    <h1 id="projecth1">Projects</h1>
    <section class="code">
        <div class="align" id="project1">
           <a href ="https://thawing-mesa-73583.herokuapp.com/" target="_blank"><img width="100%" height="375px" alt="Screenshot of SideSwipe" src={sideswipe}/></a>
            <h4 id="project2Text">SideSwipe, vehicle ecommerce website!</h4>
            <a class="githubPositioning" href="https://github.com/AdamKuemmel/CARS_project2" target="_blank"><img alt="Link to repo" width="40px" height="40px" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png"/></a>
        </div>   
        <div class="align" id="project2">
            <a  href="https://iatenine.github.io/currency-exchange-app/" target="_blank"><img width="100%" height="375px"
                    alt="Screenshot of Currency Exchange App" src={firstproject}/></a>
            <h4 id="project1Text">A Simple Currency Exchange App</h4>
            <a class="githubPositioning2" href="https://github.com/iatenine/currency-exchange-app" target="_blank"><img
                    alt="Link to repo" width="40px" height="px"
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png"/></a>
        </div>
        
        <div class="align" id="project2">
           <a ><img width="100%" height="375px" alt="Javascript" src={placeholder}/></a>
        </div>
           
    </section>
    </main>
        </>
    )
}

export default Projects;