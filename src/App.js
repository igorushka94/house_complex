import './App.css';
import Header from './components/header/Header';
import Benefit from './components/benefit/Benefit';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Benefit title="ЖК Возрождение"/>
      <Footer />
    </div>
  );
}

export default App;
