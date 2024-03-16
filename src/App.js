import './App.css';
import { BrowserRouter} from "react-router-dom";
import HeaderRoute from './components/route';
import Header from './components/Nav';
function App() {
  return (
   <>
   <BrowserRouter >
   <Header/>
   <HeaderRoute />
   </BrowserRouter>
   </>
  );
}

export default App;
