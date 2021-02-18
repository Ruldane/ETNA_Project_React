import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="landing">
                    <div className="light-overlay landing-inner text-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1 className="display-3 mb-4">TâchesManager</h1>
                                    <p className="lead">
                                        Créer votre compte pour pouvoir créer et gérer vos projets
                                    </p>
                                    <hr/>
                                    <Link to={"/register"} className="btn btn-lg btn-info mr-2">
                                        Créer un compte
                                    </Link>
                                    <Link to={"/login"} className="btn btn-lg btn-secondary mr-2">
                                        Se connecter
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;