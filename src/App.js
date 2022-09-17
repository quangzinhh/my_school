
import style from './App.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from './Nav/Navbar'
import Footer from './Footer/Footer'
function App() {
  return (
    <div>
      <div className={style.distance}></div>
      <Navbar/>
      <Footer/>
    </div>
    
  );
}

export default App;
