import React, {useState} from "react"
import './App.css';

import NavBar from './components/navbar';
import Home from './pages/home'
import Footer from './components/footer';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {

  const [page, setPage] = useState(0)

  const pageProps = {
    page, 
    setPage
  }

  return(
    <>
      <NavBar props={pageProps} />
        {page === 0 ? <Home /> : ""}
        {page === 1 ? <About /> : ""}
        {page === 2 ? <Contact /> : ""}
        {page === 3 ? <Projects /> : ""}
      <Footer />
    </>
  )
}

export default App;
