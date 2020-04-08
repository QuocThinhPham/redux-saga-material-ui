import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import {
	Button,
	Grid
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import styles from './styles';
import { STATUSES } from './../../constants';
import * as taskActions from './../../actions/tasks';
import * as modalActions from './../../actions/modal';
import TaskList from './../../components/TaskList';
import TaskForm from './../TaskForm';
import SearchBox from './../../components/SearchBox';

class TaskBoard extends Component {

   componentDidMount() {
      const { taskActionCreators } = this.props;
      const { fetchListTask } = taskActionCreators;
      fetchListTask();
   }

	renderBoard = () => {
      const { listTask } = this.props;
		let xhtml = null;
		xhtml = (
			<Grid container spacing={2}>
				{
					STATUSES.map(status => {
						const taskFilter = listTask.filter((task) => task.status === status.value);
						return (
							<TaskList key={status.value} tasks={taskFilter} status={status}/>
						);
					})
				}
			</Grid>
		);
		return xhtml;
	}

	openForm = () => {
		const { modalActionCreators } = this.props;
      const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
      showModal();
      changeModalTitle('Add New Task');
      changeModalContent(<TaskForm />);
	}

   handleFilter = (event) => {
      const { value } = event.target;
      const { taskActionCreators } = this.props;
      const { filterTask } = taskActionCreators;
      filterTask(value);
   }

   renderSearchBox = () => {
      let xhtml = null;
      xhtml = <SearchBox handleChange={this.handleFilter} />
      return xhtml;
   }

	render() {
		const { classes } = this.props;
		return (
         <div className={classes.container}>
		    	<Button
               variant="contained"
               color="primary"
               onClick={this.openForm}
            >
			      <AddIcon />&nbsp;&nbsp;&nbsp;Add New Task
            </Button>
            { this.renderSearchBox() }
            { this.renderBoard() }
         </div>
		);
	}
}

TaskBoard.propTypes = {
   classes: PropTypes.object,
   taskActionCreators: PropTypes.shape({
      fetchListTask: PropTypes.func,
      filterTask: PropTypes.func
   }),
   modalActionCreators: PropTypes.shape({
      showModal: PropTypes.func,
      hideModal: PropTypes.func,
      changeModalTitle: PropTypes.func,
      changeModalContent: PropTypes.func
   }),
   listTask: PropTypes.array,
}

const mapStateToProps = state => {
   return {
      listTask: state.tasks.listTask,
   }
}

const mapDispatchToProps = dispatch => {
   return {
      taskActionCreators: bindActionCreators(taskActions, dispatch),
      modalActionCreators: bindActionCreators(modalActions, dispatch)
   }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
