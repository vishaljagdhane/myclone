  import logo from './logo.svg';
  import './App.css';
  import TopBarNagivationComponent from './Nagivation/TopBarNagivationComponent';
  import{BrowserRouter,Routes,Route} from 'react-router-dom'
  import NavigationPage from './Nagivation/NavigationPage';
  import HomePage from './Nagivation/HomePage';
  import AboutPage from './Nagivation/AboutPage';
  import ServicesPage from './Nagivation/ServicesPage';
  import LoginPage from './Nagivation/LoginPage';
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
