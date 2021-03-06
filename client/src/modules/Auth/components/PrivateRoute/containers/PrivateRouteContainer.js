import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectors from '../../../../../selectors';
import authActionCreators from '../../../actions';

class PrivateRouteContainer extends Component {

    componentDidMount() {
        const { actions, isAuth } = this.props;
        const { getUserRequest } = actions;
        if (isAuth) {
            getUserRequest();
        }
    }

    render() {
        const { component: Component, location, isAuth, ...rest } = this.props;
        return (
            <Route {...rest} render={props => (
                isAuth
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            )} />
        );
    }
};

PrivateRouteContainer.propTypes = {
    component: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    isAuth: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        isAuth: selectors.isAuth(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActionCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouteContainer);

