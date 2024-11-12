import './App.css'
import Header from "./Components/Header/Header.jsx";
import MineContent from "./Components/MineContent/MineContent.jsx";
import LogsOur from "./Components/LogsOur/LogsOur";
import Manage from "./Components/Manage/Manage.jsx";
import PictureAndText from "./Components/PictureAndText/PictureAndText.jsx";
import Tesla from "./Components/Tesla/Tesla.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import {ways} from "./Components/PictureAndText/PictureAndText.jsx";
import styled from 'styled-components'
import Achievements from "./Components/HelpingaLocal/HelpingLocal.jsx";
import CardMarketing from "./Components/Card2/Card2.jsx";


function App() {


    return (

        <>
            <Container>
                <Header/>
                <MineContent/>
                <LogsOur/>
                <Manage/>
                <PictureAndText item={ways[0]}/>
                <Achievements/>
                <PictureAndText item={ways[1]}/>
                <Tesla/>
                <CardMarketing/>
                <Footer/>
            </Container>
        </>)
}

const Container = styled.div`
  width: 100%;
`
export default App
