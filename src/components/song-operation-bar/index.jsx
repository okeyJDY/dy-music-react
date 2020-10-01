import React, { memo } from 'react';

import { OperationBarWrapper } from './style';

export default memo(function DYSongOperationBar(props) {
  // props and state
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;
  
  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="/todo" className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/todo" className="add-icon sprite_button">+</a>
      </span>
      <a href="/todo" className="btn sprite_button">
        <i className="favor-icon icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/todo" className="btn sprite_button">
        <i className="share-icon icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/todo" className="btn sprite_button">
        <i className="download-icon icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/todo" className="btn sprite_button">
        <i className="comment-icon icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
