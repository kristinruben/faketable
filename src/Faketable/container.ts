import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { withRouter } from 'react-router-dom';
import { withTheme } from 'emotion-theming'
import component, { OwnProps, Props, StateProps, DispatchProps } from './component';

const mapStateToProps = (state: any): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = {

};

export default compose<Props, OwnProps>(
  // withRouter,
  withTheme,
  connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps),
)(component);
