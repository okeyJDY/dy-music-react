import React, { memo } from 'react';

import { Pagination } from 'antd';
import { PaginationWrapper } from './style';

export default memo(function DYPagination(props) {
  // state and props
  const { total, currentPage, onPageChange } = props;

  // function handle

  return (
    <PaginationWrapper>
      <Pagination className="pagination"
                  size="small"
                  pageSize={35}
                  total={total}
                  current={currentPage}
                  showSizeChanger={false}
                  onChange={onPageChange} />
    </PaginationWrapper>
  )
})
