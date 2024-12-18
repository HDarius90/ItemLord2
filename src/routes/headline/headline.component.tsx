import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { HeadlineComponent, HeadlineContainer } from './headline.stlyes';

export type HeadlineProps = {
  children?: React.ReactNode;
};

const Headline: FC<HeadlineProps> = () => {
  return (
    <>
      <HeadlineContainer>
        <HeadlineComponent>Item Lord 2</HeadlineComponent>
        <button>...</button>
      </HeadlineContainer>
      <Outlet />
    </>
  );
};

export default Headline;
