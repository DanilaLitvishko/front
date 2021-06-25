import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './components/footer/footer.component';
import Header from './components/header/header.component'
import Layout from './components/layout/layout.component';
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={SignUp}/>
      </Switch>
    </Layout>
  </div>
)

export default App;
