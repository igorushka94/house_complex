import './App.css';
import Header from './components/header/Header';
import Benefit from './components/benefit/Benefit';
import Footer from './components/footer/Footer';
import Partners from './components/partners/Partners';
// import Popup from "./components/popup/Popup";
import Documents from "./components/documents/Documents";
import Error404 from "./components/error404/Error404";
import TittleButtons from './components/home_screen/TittleButtons';
import Apatment from './components/apatment/Apatment';

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
      <Benefit title="ЖК Возрождение" />
      <Partners />
      <TittleButtons count="1000" price="3 млн." region1="Западном районе" city="Ростова-на-Дону" />
      <Apatment />

      {/*<Popup />*/}
      {/* <Documents />*/}
      <Footer />
    </div>
  );
}

export default App;



// Формитирование кода SHIFT + Option + F
// Удалить строку SHIFT + Command + K
