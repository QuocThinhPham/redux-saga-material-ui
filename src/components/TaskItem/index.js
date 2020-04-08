import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
   Grid,
   Card, CardContent, CardActions,
   Typography,
   Fab,
   Icon,
   Box
} from '@material-ui/core';

class TaskItem extends Component {
   render() {
      const { classes, task, status } = this.props;
      return (
         <Card className={classes.card}>
            <CardContent>
               <Grid
                  container
                  justify="space-between"
                  alignItems="center"
                  className={classes.cardHeader}
               >
                  <Grid item md={9}>
                     <Typography component="h2">
                        {task.title}
                     </Typography>
                  </Grid>
                  <Grid item md={3}>
                     <Box display="flex" justifyContent="flex-end">
                        {status.label}
                     </Box>
                  </Grid>
               </Grid>
               <p>{task.desc}</p>
            </CardContent>
            <CardActions className={classes.cardActions}>
               <Fab color="primary" size="small" aria-label="Edit" className={classes.fab}>
                  <Icon fontSize="small">edit</Icon>
               </Fab>
               <Fab color="primary" size="small" aria-label="Delete" className={classes.fab}>
                  <Icon fontSize="small">delete</Icon>
               </Fab>
            </CardActions>
         </Card>
      );
   }
}

export default withStyles(styles)(TaskItem);
