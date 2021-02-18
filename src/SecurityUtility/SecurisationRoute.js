import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const SecurisationRoute = ({component:Component, security, ...AllOtherProps}) => (
    <Route {...AllOtherProps} render={props =>
        security.validToken === true ?(
            <Component{...props} />
        ) :(
            <Redirect to="login"/>
        )
    }/>
)

SecurisationRoute.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    security: state.security
})

export default connect(mapStateToProps)(SecurisationRoute);