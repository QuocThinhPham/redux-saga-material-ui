import React, { Component } from 'react';
import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from './../../actions/modal';

class ModalForm extends Component {
   render() {
      const {
         classes,
         open,
         title,
         component,
         modalActionCreators
      } = this.props;
      const { hideModal } = modalActionCreators;
      return (
         <Modal open={open} onClose={hideModal}>
            <div className={classes.modal}>
               <div className={classes.title}>
                  <span>{title}</span>
                  <CloseIcon className={classes.icons} onClick={hideModal}/>
               </div>
               <div className={classes.paper}>{component}</div>
            </div>
         </Modal>
      );
   }
}

ModalForm.propTypes = {
   classes: PropTypes.object,
   open: PropTypes.bool,
   title: PropTypes.string,
   component: PropTypes.object,
   modalActionCreators: PropTypes.shape({
      hideModal: PropTypes.func
   })
};

const mapStateToProps = state => ({
   open: state.modal.showModal,
   title: state.modal.title,
   component: state.modal.component
});

const mapDispatchToProps = dispatch => ({
   modalActionCreators: bindActionCreators(modalActions, dispatch)
});

const withConnect = connect(
   mapStateToProps,
   mapDispatchToProps
);

export default compose(
   withStyles(styles),
   withConnect
)(ModalForm);
