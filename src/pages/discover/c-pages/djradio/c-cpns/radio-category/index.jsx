import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getCateListAction } from '../../redux/actionCreators';

import { Carousel } from 'antd';
import {
  RadioCategoryWrapper,
  RadioCategoryContent,
  CategoryItemImage
} from './style';

const PAGE_SIZE = 18;

export default memo(function DYRadioCategory() {

  // redux hook
  const dispatch = useDispatch();
  const { categories } = useSelector(state => ({
    categories: state.getIn(["djradio", "categories"]),
  }), shallowEqual);

  // other hook
  useEffect(() => {
    dispatch(getCateListAction());
  }, [dispatch]);

  // data handle
  const page = Math.ceil(categories.length / PAGE_SIZE) || 1;

  // function handle
  const getSize = (index) => {
    return index * PAGE_SIZE > categories.length ? categories.length : index  * PAGE_SIZE;
  }

  return (
    <RadioCategoryWrapper>
      <div className="arrow arrow-left"></div>
      <RadioCategoryContent>
        <Carousel>
          {
            Array(page).fill(0).map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {
                    categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item, indey) => {
                      return (
                        <div key={indey} className="category-item radio_bg">
                          <CategoryItemImage className="image" imgUrl={item.picWebUrl} />
                          <div>{item.name}</div>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </RadioCategoryContent>
      <div className="arrow arrow-right"></div>
    </RadioCategoryWrapper>
  )
})
