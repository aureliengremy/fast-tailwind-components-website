import './App.css'
import ContentSection from './ContentSection'
import FormContact from './FormContact'
import HeaderWithMenu from './HeaderWithMenu'
import ModalComponent from './ModalComponent'
import PortfolioDemo from './PortfolioDemo'
import ProjectGallery from './ProjectGallery'
import SecondHeaderWithMenu from './SecondHeaderWithMenu'
import StatComponent from './StatComponent'


function App() {
  // const rgba = (RgbaColor, number, string) => {
  //   (firstValue: (RgbaColor | number | string), secondValue: number?, thirdValue: number?, fourthValue: number?): string
  // }

  return (
    <div className="App">
    <HeaderWithMenu/>
    <StatComponent/>
    <ProjectGallery/>
    <ModalComponent/>
    
    <ContentSection/>
    <FormContact/>

    <SecondHeaderWithMenu/>
    <PortfolioDemo/>
    </div>

  )
}

export default App
