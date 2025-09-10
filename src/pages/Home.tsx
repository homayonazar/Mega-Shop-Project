import Container from "../components/Container"
import Footer from "../components/Footer"
import Header from "../components/Header"

function Home() {
  return (
    <div className="bg-[var(--bg)] w-full">
        <Header/>

        <Container>
            <div className="Slide_menu_section flex flex-row gap-6 mt-10">
            <div className="sideMenu w-1/4 bg-amber-300 h-130"></div>
            <div className="middlegalery w-1/2 bg-amber-500 h-130"></div>
            <div className="rightGalery w-1/4 bg-amber-800 h-130"></div>

        </div>
        </Container>








        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <Footer/>
    </div>
  )
}

export default Home