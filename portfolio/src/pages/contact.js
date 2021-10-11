
const Contact = () => {
    return (
       <> 
    <section id="contact">
      <h1 id="contactMe"> Contact Me!</h1> 
      <form id="contactform">
        <div class="inputform" >
            <h3>Name: </h3>
            <input class="contactinput"/>
        </div>
        <div class="inputform border">
          <h3> Email Address: </h3>
          <input class="contactinput"/>
        </div>
        <div class="inputform">
          <h3> Message: </h3>
          <textarea id="contacttextarea"></textarea>
        </div>
        <button id="buttonform"> Submit </button>
      </form>
    </section>
        </>
    )
}

export default Contact;