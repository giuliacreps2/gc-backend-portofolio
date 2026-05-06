import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavbarHome from '../components/NavbarHome'
import Projects from '../components/Projects'

const Home = () => {
    return(
        <>
        <NavbarHome/>
        <Hero/>
        <Projects/>
        <About/>
        <Footer/>
        </>
    )
}

export default Home