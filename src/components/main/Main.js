import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Security from '../../helpers/Security';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../search/SearchBar';

const styles = {
  root: {
    flexGrow: 1
  },

  appBarWrapper: {
    display: 'flex',
    flexGrow: 1,
    height: '63px'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbar: {
    justifyContent: 'space-around'
  }
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {!Security.isAuthorized() ? (
          <Redirect to={'/login'} />
        ) : (
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                  <Typography variant="h6" color="inherit">
                    Welcome
                  </Typography>
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
            </Grid>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Main);
