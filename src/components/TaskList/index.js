import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
	Grid,
	Box
} from '@material-ui/core';
import TaskItem from './../TaskItem';

class TaskList extends Component {
	render() {
		const { classes, tasks, status } = this.props;
		return (
			<Grid key={status.value} item md={4} xs={12}>
				<Box mx={2} my={1}>
					<div className={classes.status}>{status.label}</div>
				</Box>
				<div className={classes.task}>
					{
						tasks.map(task => {
							return (
								<TaskItem key={task.id} task={task} status={status}/>
							);
						})
					}
				</div>
			</Grid>
		);
	}
}

export default withStyles(styles)(TaskList);