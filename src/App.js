import { Route, Switch } from 'react-router';
import './App.css';
import ActivateEmail from './components/activate-email/activate-email.component';
import CompleteProfile from './components/complete-profile/complete-profile.component';
import ResendEmail from './components/resend-email/resend-email.component';
import CreditCardDetail from './components/credit-card-details/credit-card-details.component';
import Layout from './components/layout/layout.component';
import SignUp from './components/signup/signup.component';

const App = () => (
    <Layout>
      <Switch>
        <Route exact path='/' component={SignUp}/>
        <Route path='/resendEmail' render={props=><ResendEmail {...props}/>}/>
        <Route path='/creditCardDetails' component={CreditCardDetail}/>
        <Route path='/completeProfile' component={CompleteProfile}/>
        <Route path='/activateEmail/:confirmationCode' component={ActivateEmail}/>
      </Switch>
    </Layout>
)

export default App;
