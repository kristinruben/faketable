import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
  [key: string]: {
    background: string;
    primary: string;
    secondary: string;
    disabled: string;
    tableBackground?: string;
  },
};

export const theme: Theme = {
  lightTheme: {
    background: '#EEEEEE',
    primary: 'rgba(0, 0, 0, 87)',
    secondary: 'rgba(0, 0, 0, 54)',
    disabled: 'rgba(0, 0, 0, 38)',
    tableBackground: '#FFFFFF',
  },
  darkTheme: {
    background: '#212121',
    primary: 'rgba(255, 255, 255, 100)',
    secondary: 'rgba(255, 255, 255, 70)',
    disabled: 'rgba(255, 255, 255, 50)',
  },
};

export default styled as CreateStyled<Theme>;