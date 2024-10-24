

import './App.css'
import Header from "./Components/Header/Header.jsx";
import MineContent from "./Components/MineContent/MineContent.jsx";
import LogsOur from "./Components/LogsOur/LogsOur";
import Manage from "./Components/Manage/Manage.jsx";
import Card from "./Components/Card/Card.jsx";
import PictureAndText from "./Components/PictureAndText/PictureAndText.jsx";
import {ways} from './Components/Array/array.js'
import HelpingLocal from "./Components/HelpingaLocal/HelpingLocal.jsx";
import Tesla from "./Components/Tesla/Tesla.jsx";
import Card2 from "./Components/Card2/Card2.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {


  return (

    <>
        <Header/>
        <MineContent/>
        <LogsOur/>
        <Manage/>
        <Card/>
        <PictureAndText {...ways[0]}  />
        <HelpingLocal/>
        <PictureAndText {...ways[1]} />
        <Tesla/>
        <Card2/>
        <Footer/>
    </>
  )
}

export default App
