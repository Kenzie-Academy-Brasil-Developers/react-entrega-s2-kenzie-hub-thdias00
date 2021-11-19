import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
    )
}
export default Routes;