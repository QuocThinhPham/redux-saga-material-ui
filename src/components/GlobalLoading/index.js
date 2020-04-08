import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import * as uiActions from './../../actions/ui';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import loadingIcon from './../../assets/images/loading3.gif';
import PropTypes from 'prop-types';

class GlobalLoading extends Component {
   render() {
      const { classes, showLoading } = this.props;
      let xhtml = null;
      if (showLoading) {
         xhtml = (
            <div className={classes.loadingOverlay}>
               <img src={loadingIcon} alt="Loading" className={classes.icon}/>
            </div>
         );
      }
      return xhtml;
   }
}

GlobalLoading.propTypes = {
   classes: PropTypes.object,
   showLoading: PropTypes.bool
};

const mapStateToProps = state => {
   return {
      showLoading: state.ui.showLoading
   }
}

// const mapDispatchToProps = dispatch => {
//    return {
//       uiActions: bindActionCreators(uiActions, dispatch)
//    }
// }

const withConnect = connect(mapStateToProps, null);

export default compose(
   withStyles(styles),
   withConnect,
)(GlobalLoading);
