import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
   Grid,
   Button,
   Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/tasks';
import renderTextField from './../../components/FormHelper/TextField';
import validate from './validate';

class TaskForm extends Component {

   handleSubmitForm = data => {
      const { taskActionCreators } = this.props;
      const { addTask } = taskActionCreators;
      const { title, desc } = data;
      addTask(title, desc);
   }

	render() {
		const {
         classes,
         modalActionCreators,
         handleSubmit,
         invalid,
         submitting
      } = this.props;
      const { hideModal } = modalActionCreators;
		return (
         <form
            className={classes.form}
            onSubmit={handleSubmit(this.handleSubmitForm)}
         >
            <Grid spacing={1} container>
               <Grid item md={12} className={classes.textfield}>
                  <Field
                     name="title"
                     component={renderTextField}
                     margin="dense"
                     id="title"
                     label="Title"
                     type="text"
                     fullWidth
                     autoComplete="off"
                  />
               </Grid>
               <Grid item md={12} className={classes.textfield}>
                  <Field
                     name="desc"
                     component={renderTextField}
                     multiline
                     rowsMax="3"
                     id="desc"
                     label="Description"
                     fullWidth
                     autoComplete="off"
                  />
               </Grid>
               <Grid item md={12} className={classes.buttons}>
                  <Box display="flex" justifyContent="flex-end" mt={2}>
                     <Box mr={2}>
                        <Button
                           variant="contained"
                           size="small"
                           color="primary"
                           type="submit"
                           disabled={invalid || submitting}
                        >Save</Button>
                     </Box>
                     <Button
                        variant="contained"
                        size="small"
                        onClick={hideModal}
                     >Cancel</Button>
                  </Box>
               </Grid>
            </Grid>
         </form>
		);
	}
}

TaskForm.propTypes = {
   classes: PropTypes.object,
   modalActionCreators: PropTypes.shape({
      hideModal: PropTypes.func
   }),
   taskActionCreators: PropTypes.shape({
      addTask: PropTypes.func
   }),
   validate: PropTypes.func,
   invalid: PropTypes.bool,
   submitting: PropTypes.bool,
};

const mapStateToProps = null

const mapDispatchToProps = dispatch => {
   return {
      modalActionCreators: bindActionCreators(modalActions, dispatch),
      taskActionCreators: bindActionCreators(taskActions, dispatch),
   }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({
   form: FORM_NAME,
   validate
});

export default compose(
   withStyles(styles),
   withConnect,
   withReduxForm,
)(TaskForm);
