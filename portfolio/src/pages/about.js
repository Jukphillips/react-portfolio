import React from "react"
import headshot from "../Assets/headshot.jpg"

const About = () => {
    return (
       <> 
    <article class="About-me-main margin" id="aboutme">
      <h1>About Me!</h1>
      <section id="shortAbout">
        <div id="headshot">
          <img id="headshotImg" src={headshot} />
          <p>Hi! My name is Justin and I'm a freelance full-stack web developer located in Colorado Springs, CO </p>
        </div>
        <div id="mySkills">
          <p id="explainSkills"> Here you will find my top skills and how comfortable I am working with each technology:</p>
            <ul>
              <li class="skillslist"><p class="textLi">HTML5</p><span class="empty pernine "> empty</span><p class="precentageLi perHC">90%</p></li>
              <li class="skillslist"><p class="textLi">JavaScript</p><span class="empty pereightsev">empty</span> <p class="precentageLi perJS">87%</p></li>
              <li class="skillslist"><p class="textLi">CSS3</p><span class="empty pereightfiv"> empty</span> <p class="precentageLi perCEG">85%</p></li>
              <li class="skillslist"><p class="textLi">Express.js</p><span class="empty pereightfiv">empty</span><p class="precentageLi perCEG">85%</p></li>
              <li class="skillslist"><p class="textLi">Git</p><span class="empty pereightfiv">empty</span><p class="precentageLi perCEG">85%</p></li>
              <li class="skillslist"><p class="textLi">Node.js</p><span class="empty pereightte">empty</span><p class="precentageLi perNo">83%</p></li>              
              <li class="skillslist"><p class="textLi">MySQL</p><span class="empty persevenfe">empty</span><p class="precentageLi perSQ">75%</p></li>
              <li class="skillslist"><p class="textLi">React</p><span class="empty persixfe">empty</span><p class="precentageLi perRM">65%</p></li>
              <li class="skillslist"><p class="textLi">MongoDb</p><span class="empty persixfe">empty</span><p class="precentageLi perRM">65%</p></li>
            </ul>
        </div>
      </section>
      <div id="brandState">
        <p id="articleAbout"> A young full-stack web developer, allowing ease to learn and a hunger to grow at a much faster rate than older peers.
        With little experience, growth can be exponential and custom to fit an employer’s desire. Currently, I am studying to
        receive a full-stack development certificate that will provide me with a broad range of knowledge on languages and
        frameworks including, but not limited to: Html, Css, Javascript, Node.js, MySQL, and React.js. Known as a fast learner
        with good leadership skills and a desire to do more. For each project I participate in, I'm constantly looking for new
        and innovative ways to advance both current knowledge and functionality of the websites I create to make the most
        complete user experience possible. My most recent project of four peers, worked a week and developed a car ecommerce
        website. This website allows users to view cars from sellers, add cars, contact sellers, and delete their vehicles once
        they’ve been sold. Easily finding myself more than excited to see where my professional career takes me, and to work on
        new and innovative ways to provide an excellent experience to the user.</p>
        <a id="viewbrand" href="./Assets/Full-StackResume.pdf" download> Click here to view my resume</a>

      </div>
    </article>
    </>
    )
}

export default About;