import RegistrationForm from './Pages/RegistrationForm';
import LoginForm from './Pages/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Header from './Components/Headers';
import Footer from './Components/Footer';
import Navbarmenu from './Components/Navbarmenu';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <div class="flex-container"></div>

      <Header />
      <Router>
        <Navbarmenu />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/LoginForm" element={<LoginForm />}></Route>
          <Route
            path="/RegistrationForm"
            element={<RegistrationForm />}
          ></Route>
          <Route path="/Services" element={<Services />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
