import React from 'react';
import { Button, ButtonProps } from 'antd';
export type OneButtonProps = {
  onClick?: (clicked: boolean) => void;
}

export const OneButton: React.FC<OneButtonProps> = ({ onClick }) => (
  <Button onClick={() => onClick?.(true)}>Button</Button>
);