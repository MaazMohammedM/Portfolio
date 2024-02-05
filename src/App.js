import Header from "./Components/Header/header";
import Certification from "./pages/Certification";
import Exp from "./pages/Exp";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WorkExp from "./pages/WorkExp";
import Form from "./pages/Form";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";


export default function App() {
  return (
    <>
    <Header/>
    <main className="w-full">
      <Hero/>
      <Exp/>
      <WorkExp/>
      <Projects/>
      <Skills/>
      <Certification/>
      <Form/>
      <Connect/>
    </main>
    <Footer/>
    </>
  )
}

