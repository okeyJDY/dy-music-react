import React, { memo, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import classnames from 'classnames';
import {
  changeCurrentCategoryAction,
  getSongsAction
} from '../../redux/actionCreators';

import { Popover } from 'antd';
import {
  SongsCategoryWrapper,
  TitleButton,
  CategoryContent
} from './style';

export default memo(function DYSongsCategory() {

  // state and props
  const [showCategory, setShowCategory] = useState(false);

  // redux hook
  const dispatch = useDispatch();
  const { categories, currentCategory } = useSelector(state => ({
    categories: state.getIn(["songs", "categories"]),
    currentCategory: state.getIn(["songs", "currentCategory"]),
  }), shallowEqual);

  // other handle

  // function handle
  const selectCategory = (currentCategory) => {
    setShowCategory(false);
    dispatch(changeCurrentCategoryAction(currentCategory));
    dispatch(getSongsAction(0));
  };
  
  // jsx handle
  const categoryTitle = (
    <TitleButton className="sprite_button2" onClick={e => selectCategory("全部")}>
      全部风格
    </TitleButton>
  );
  const categoryContent = (
    <CategoryContent>
      {
        categories.map((item, index) => {
          return (
            <dl className={classnames("category", `item${index}`)} key={item.name}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {
                  item.subs.map((iten, indey) => {
                    return (
                      <div key={iten.name}>
                        <span className={classnames("link", { "active": iten.name === currentCategory })} onClick={e => selectCategory(iten.name)}>{iten.name}</span>
                        <span className="divider">|</span>
                      </div>
                    )
                  })
                }
              </dd>
            </dl>
          )
        })
      }
    </CategoryContent>
  );

  return (
    <SongsCategoryWrapper>
      <Popover trigger="click" 
                placement="bottom"
                visible={showCategory}
                title={categoryTitle}
                content={categoryContent}
                onVisibleChange={visible => setShowCategory(visible)} >
        <button className="select" onClick={e => setShowCategory(true)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
      </Popover>
    </SongsCategoryWrapper>
  )
})
