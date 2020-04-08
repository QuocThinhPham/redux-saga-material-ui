import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class SearchBox extends Component {
   render() {
      const { classes, handleChange } = this.props;
      return (
         <form className={classes.root} noValidate autoComplete="off">
            <TextField
               variant="outlined"
               label="Enter Your Keyword..."
               type="search"
               name="keyword"
               className={classes.textfield}
               onChange={handleChange}
               size="small"
               autoComplete="off"
            />
         </form>
      );
   }
}

SearchBox.propTypes = {
   classes: PropTypes.object,
};

export default withStyles(styles)(SearchBox);
