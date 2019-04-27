import React, { Component } from 'react';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  root: {
      display: 'flex',
      padding: '10px',
      margin: '10px',
      flexGrow: 1,
      maxWidth: 1024,
      justifyContent: 'space-between'
  },
    searchBox: {
      flexGrow: 1
    }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <InputBase className={classes.searchBox} placeholder="Search Anything..."/>
          <IconButton aria-label="Search">
              <SearchIcon />
          </IconButton>
      </Paper>
    );
  }
}
export default withStyles(styles)(SearchBar);
