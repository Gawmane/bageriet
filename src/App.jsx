//Router
import {BrowserRouter as Router} from 'react-router-dom' 
import { AppRouter } from './Components/AppRouter/AppRouter';

//Components 
import {Header} from '../src/Components/Partials/Header/Header';
import {Main} from '../src/Components/Partials/Main/Main';
import {Footer} from '../src/Components/Partials/Footer/Footer';

//Style
import './App.scss';




function App() {
  return (
    <>
    {/* Router - Skal omfange de sider vi har på siden samt nav- skal være parents til header */}
    <Router>
    <Header/>
    <Main>
      {/* Indsætter approuter inde i vores main da alt indhold skal ind under main (chrild) */}
      <AppRouter/>
      </Main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;

