import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class StartPage extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

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

StartPage.propTypes= {
    security: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    security: state.security
})

export default connect(mapStateToProps)(StartPage);