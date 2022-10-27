/* eslint-disable react/button-has-type */
import React from 'react';

import PropTypes from 'prop-types';

function Button({
    children, className,
    border, fontSize,
    paddingY
}) {
    return (
        <button
            className={`${fontSize} 
                } ${paddingY} rounded-md ${border ? 'border-2 border-primary' : ''
                } flex justify-center items-center bg-primary mt-5 text-black  ${className
                } `}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fontSize: PropTypes.string,
    paddingY: PropTypes.string,
    border: PropTypes.bool,
};

Button.defaultProps = {
    children: 'Button',
    className: '',
    paddingY: 'py-3',
    border: false,
};

export default Button;
