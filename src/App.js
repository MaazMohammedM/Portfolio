import Header from "./Components/Header/header";
import Certification from "./pages/Certification";
import Exp from "./pages/Exp";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import WorkExp from "./pages/WorkExp";
import Form from "./pages/Form";
import Footer from "./pages/Footer";


export default function App() {
  return (
    <>
    <Header/>
    <main className="w-full">
      <Hero/>
      <Exp/>
      <WorkExp/>
      <Skills/>
      <Certification/>
      <Form/>
    </main>
    <Footer/>
    </>
  )
}

