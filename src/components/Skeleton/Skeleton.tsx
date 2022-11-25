import React from 'react';
import { Skeleton, Space } from 'antd';

const SkeletonBlock = () => {
  return (
    <Space className="block-item">
      <Skeleton.Image style={{ width: '280px', height: '140px' }} active={true} />
      <Skeleton.Input active={true} size="small" style={{ width: '240px', marginBlock: '8px' }} />
      <Skeleton.Input active={true} size="small" style={{ width: '240px', marginBlock: '8px' }} />
      <Skeleton.Input active={true} size="small" style={{ width: '240px', marginBlock: '8px' }} />
      <Skeleton.Input active={true} size="small" style={{ width: '240px', marginBlock: '8px' }} />
      <Skeleton.Input active={true} size="small" style={{ width: '240px', marginBlock: '8px' }} />
      <Skeleton.Input active={true} size="small" style={{ width: '240px', marginBlock: '8px' }} />
    </Space>
  );
};

export default SkeletonBlock;
