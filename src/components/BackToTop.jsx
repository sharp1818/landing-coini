import React from 'react'
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

const BackToTop = ({ variant }) => {
    return (
        <div
            className={classNames('btn', 'btn-soft-' + variant, 'shadow-none', 'btn-icon', 'btn-back-to-top')}
            id="btn-back-to-top"
            to="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <FeatherIcon icon="arrow-up" className="icon-xxs" />
        </div>
    );
};

BackToTop.defaultProps = {
    variant: 'primary',
};

export default BackToTop;
