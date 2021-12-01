import {Routes, Route} from "react-router-dom";
import Footer from './components/footer';
import Home from './pages/home'

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element = {<Home />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
