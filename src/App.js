import './App.css';
import ContactForm from './ContactForm';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

const App = () => {
  return (
   <>
   <Navbar title = "Converter"/>
   <div className='container my-5'>
     <TextForm heading = "Enter the text to analyze below"/>
   </div>
   </>
  );
}

export default App;