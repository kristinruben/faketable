import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './styled';
/** @jsx jsx */
import Faketable from './Faketable';

export type OwnProps = {

};


export type StateProps = {};

export type DispatchProps = {};

export type Props = RouteComponentProps<any> & StateProps & OwnProps & DispatchProps & {};

// export type State = {};

class App extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Faketable />
      </ThemeProvider>
    )
  }
}

export default App;

