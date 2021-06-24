import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component'
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/' component={SignUp}/>
    </Switch>
    <Footer/>
  </div>
)

export default App;
