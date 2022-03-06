import React from 'react';
import { Body, LoadingStyle } from './Loading.styles';

interface LoadingProps {
  list: string;
}

const Loading = ({ list }: LoadingProps) => (
  <Body>
    <LoadingStyle>
      {list}
      loading...
    </LoadingStyle>
  </Body>
);

export default Loading;
