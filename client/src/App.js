import {BrowserRouter as Router, Route} from 'react-router-dom'
import Landing from './modules/Landing/Landing.jsx'
import Footer from './modules/Footer/Footer.jsx'
import Navbar from './modules/Navbar/Navbar.jsx'
import Home from './modules/Home/Home.jsx'
import Create from './modules/Form/CreateForm.jsx'
import store from './store/store'
import {Provider} from 'react-redux'
import PokeDetail from './modules/PokeDetail/PokeDetail.jsx'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path = '/' component = {Landing}/>
        <Route path = {['/Home','/Create','/PokeDetail']} component = {Navbar}/>
        <Route path = '/Home' component= {Home}/>
        <Route path = '/Create' component = {Create}/>
        <Route path = '/PokeDetail/:name' render={({match})=> <PokeDetail name={match.params.name}/>}/>
        <Route path = '/' component = {Footer}/>
      </Router>
    </Provider>
  );
}

export default App;
