import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, href, children }) {
  ButtonLink.propTypes = {
    className: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  };
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

export default ButtonLink;
