import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { HeaderWrapper } from './style';

const DYThemeHeaderSmall = memo(props => {
  const { title, more } = props;
  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/todo">{more}</a>
    </HeaderWrapper>
  )
})

DYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default DYThemeHeaderSmall;
