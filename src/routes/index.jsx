import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Dashboard from '../pages/dashboard';
import { useEffect, useState } from 'react';

const Routes = () => {
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Kenzie:token"));

        if (token) {
            return setAuthenticated(true);
        }
    }, [authenticated]);
    return (
        <Switch>
            <Route exact path="/">
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route path="/signup">
                <Signup authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
            <Route path="/dashboard">
                <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
            </Route>
        </Switch>
    )
}
export default Routes;