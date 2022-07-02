import Container from './components/Container';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Addproduct from './pages/Addproduct';
import Checkproduct from './pages/Checkproduct';
import Updatelocation from './pages/Updatelocation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addproduct" element={<Addproduct />}/>
        <Route path="/checkproduct" element={<Checkproduct />}/>
        <Route path="/updatelocation" element={<Updatelocation />} />
      </Routes>
    </Router>
  );
}

export default App;
