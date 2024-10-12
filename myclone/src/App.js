import logo from './logo.svg';
import './App.css';
import TopBarNagivationComponent from './Nagivation/TopBarNagivationComponent';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import NavigationPage from './Nagivation/NavigationPage';
function App() {
  return (
<>
<BrowserRouter>
<Routes>
<Route path='/' element={<NavigationPage/>}></Route>
</Routes>
</BrowserRouter>
</>    

  );
}

export default App;
