/** @jsx jsx */
// import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { theme } from '../styled';
;

export const Container = styled.div({
  background: `${theme.lightTheme.background}`,
  padding: '24px',
});

export const Grid = styled.div(
  {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(3, 1fr)',
    borderTop: `1px solid ${theme.lightTheme.secondary}`,
    borderRight: `1px solid ${theme.lightTheme.secondary}`,
    '> span': {
      padding: '8px 4px',
      borderLeft: `1px solid ${theme.lightTheme.secondary}`,
      borderBottom: `1px solid ${theme.lightTheme.secondary}`,
    },
  },
);

export const Headline = styled.h1({
  color: `${theme.lightTheme.secondary}`,
  fontFamily: 'roboto',
  fontSize: '24px',
});

export const Dropzone = styled.div({
  height: '600px',
  width: '600px',
  ':hover': {
    backgroundColor: 'lightblue',
  },
});
    
    // export const ColumnHeaders = styled.span({
//   color: `${theme.lightTheme.secondary}`,
//   fontFamily: 'roboto',
//   fontSize: '16px',
// });

// export const DataRow = styled.span({
//   font: 'roboto',
// });

export const Cell = styled.span({
  fontFamily: 'roboto',
});


