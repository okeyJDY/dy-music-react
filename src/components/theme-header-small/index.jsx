import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ThemeHeaderSmallWrapper } from './style';

const DYThemeHeaderSmall = memo(props => {
  const { title, more } = props;
  return (
    <ThemeHeaderSmallWrapper>
      <h3>{title}</h3>
      <a href="/todo">{more}</a>
    </ThemeHeaderSmallWrapper>
  )
})

DYThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default DYThemeHeaderSmall;
