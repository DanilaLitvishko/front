import { Route, Switch } from 'react-router';
import './App.css';
import ActivateEmail from './components/activate-email/activate-email.component';
import CompleteProfile from './components/complete-profile/complete-profile.component';
import ConfirmRegistration from './components/confirm-registration/confirm-registration.component';
import CreditCardDetail from './components/credit-card-details/credit-card-details.component';
import Layout from './components/layout/layout.component';
import Login from './components/login/login.component';
import SignUp from './components/signup/signup.component';

const App = () => (
    <Layout>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route path='/confirmRegistration' component={ConfirmRegistration}/>
        <Route path='/creditCardDetails' component={CreditCardDetail}/>
        <Route path='/completeProfile' component={CompleteProfile}/>
        <Route path='/activateEmail/:confirmationCode' component={ActivateEmail}/>
      </Switch>
    </Layout>
)

export default App;
