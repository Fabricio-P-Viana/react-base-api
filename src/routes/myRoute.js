import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function MyRoute({ element: Component, isClosed, ...rest }) {
    const isLoggedId = false;

    if (isClosed && !isLoggedId) {
        return (
            <Navigate
                to={{ pathname: '/login', state: { prevPath: rest.location?.pathname } }}
            />
        );
    }

    return Component;
}

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    element: PropTypes.element.isRequired,
    isClosed: PropTypes.bool,
};
