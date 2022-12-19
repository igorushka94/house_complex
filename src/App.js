import './App.css';
import Header from './components/header/Header';
import Benefit from './components/benefit/Benefit';
import Footer from './components/footer/Footer';
import Partners from './components/partners/Partners';
// import Popup from "./components/popup/Popup";
import Documents from "./components/documents/Documents";
import Error404 from "./components/error404/Error404";
import Apatment from './components/apatment/Apatment';
import HomeScreen from './components/home_screen/HomeScreen';
import Infrastructure from './components/infrastructure/Infrastructure';
import Progress from './components/progress/Progress';

import { Routes, Route } from "react-router-dom";


<Routes>
  <Route path="/" element={<Header />} />
  <Route path="/documents" element={<Documents />} />
  <Route path="*" element={<Error404 />} />
</Routes>


function App() {
  return (
    <div className="App">
      <Header />
      <Partners />
      <Apatment />
      <HomeScreen />
      <Benefit title="ЖК Возрождение" />
      <Infrastructure />
      <Progress />
      {/*<Popup />*/}
      {/* <Documents />*/}
      <Footer />
    </div>
  );
}

export default App;



// Формитирование кода SHIFT + Option + F
// Удалить строку SHIFT + Command + K
