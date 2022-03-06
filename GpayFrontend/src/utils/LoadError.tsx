import React from 'react';
import {
  Body, ErrorStyle,
} from './LoadError.styles';

interface LoadErrorProps {
  list: string;
}

const LoadError = ({ list }: LoadErrorProps) => (
  <Body>
    <ErrorStyle>
      ERROR:
      {" "}
      {list}
      can not be loaded. Check server connection.
    </ErrorStyle>
  </Body>
);

export default LoadError;
