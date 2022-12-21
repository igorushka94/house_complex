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
import Schedule from './components/schedule/Schedule';
import Sale from './components/sale/Sale';
import Reviews from './components/reviews/Reviews';

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
      <HomeScreen />
      <Benefit title="ЖК Возрождение" />
      <Infrastructure />
      <Progress />
      <Schedule />
      <Apatment />
      <Sale />
      <Reviews />
      <Partners />
      {/*<Popup />*/}
      {/* <Documents />*/}
      <Footer />
    </div>
  );
}

export default App;



// Формитирование кода SHIFT + Option + F
// Удалить строку SHIFT + Command + K
