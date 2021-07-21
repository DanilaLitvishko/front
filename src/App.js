import { Route, Switch } from 'react-router';
import {ThemeProvider } from 'styled-components';
import {MuiThemeProvider} from '@material-ui/core/styles'

import ActivateEmail from './components/activate-email/activate-email.component';
import ResendEmail from './components/resend-email/resend-email.component';
import CreditCardDetail from './components/credit-card-details/credit-card-details.component';
import Layout from './components/layout/layout.component';
import mainTheme from './themes/main.theme'
import Auth from './components/auth/auth.component';
import Profile from './components/profile/profile.component';
import { QueryClient, QueryClientProvider } from 'react-query';
import CompleteProfileContainer from './components/complete-profile/complete-profile.container';

const queryClient = new QueryClient()

const App = () => (
  <MuiThemeProvider theme={mainTheme}>
    <ThemeProvider theme={mainTheme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Auth}/>
            <Route path='/resendEmail' render={props=><ResendEmail {...props}/>}/>
            <Route path='/creditCardDetails' component={CreditCardDetail}/>
            <Route path='/completeProfile' component={CompleteProfileContainer}/>
            <Route path='/activateEmail/:confirmationCode' component={ActivateEmail}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </Layout>
      </QueryClientProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

export default App;
