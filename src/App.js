import { Route, Switch } from 'react-router';
import {ThemeProvider } from 'styled-components';
import {MuiThemeProvider} from '@material-ui/core/styles'
import { useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import ActivateEmail from './components/activate-email/activate-email.component';
import ResendEmail from './components/resend-email/resend-email.component';
import Layout from './components/layout/layout.component';
import mainTheme from './themes/main.theme'
import Auth from './components/auth/auth.component';
import Profile from './components/profile/profile.component';
import CompleteProfileContainer from './components/complete-profile/complete-profile.container';
import { selectCurrentUser } from './redux/user/user.selectors';
import PrivateRoute from './components/private-route/private-route.component'

const queryClient = new QueryClient()

const App = () => {
  const currentUser = useSelector(selectCurrentUser)
  return(
    <MuiThemeProvider theme={mainTheme}>
      <ThemeProvider theme={mainTheme}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Auth}/>
              <Route path='/resendEmail' render={props=><ResendEmail {...props}/>}/>
              <PrivateRoute authed={!!currentUser} path='/completeProfile' component={CompleteProfileContainer}/>
              <Route path='/activateEmail/:confirmationCode' component={ActivateEmail}/>
              <PrivateRoute authed={!!currentUser} path='/profile' component={Profile}/>
            </Switch>
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default App;
