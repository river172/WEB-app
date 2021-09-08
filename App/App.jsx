import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history, Role } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { AdminPage } from '@/AdminPage';
import { LoginPage } from '@/LoginPage';
import logo from './../images/logo.jpg'
import Navbar from "@/submit_forms/navbar";
import Edit from "@/submit_forms/edit";
import Create from "@/submit_forms/create";
import RecordList from "@/submit_forms/recordList";
import Record from "@/submit_forms/user_record";





class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }
    

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
            <Router history={history}>
                
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-light bg-success">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                                
                                <Link to="/submit_forms/create" className="nav-item nav-link">Nueva Venta</Link>
                                <Link to="/submit_forms/recordList" className="nav-item nav-link">Ventas anteriores</Link>
                                <Link to="/submit_forms/user_record" className="nav-item nav-link">user</Link>
                                
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                                
                                
                            </div>
                        </nav>
                    }
                    
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                
                                <div className="col-md-6 offset-md-3">
                                
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                                    <Route path="/login"  component={LoginPage} />
                                    <Route path ="/submit_forms/create" component={Create}/>
                                    <Route path ="/submit_forms/recordList" component={RecordList}/>
                                    <Route path ="/submit_forms/edit" component={Edit}/>
                                    <Route path ="/submit_forms/user_record" component={Record}/>
                                    
                                    
                          
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               

                
            </Router>
            
        );
    }
}



export { App }; 