import './App.css';
// import Home from '../../components/Home/Home';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Diagnostics from '../../components/Diagnostics/Diagnostics';

const App = () => {
  return ( 
    <main>
      <Navbar/>
      {/* <Home/> */}
      <Diagnostics/>
      <Footer/>
    </main>
   );
}
 
export default App;
