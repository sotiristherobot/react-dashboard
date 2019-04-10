import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Security from '../../helpers/Security';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  appBarWrapper: {
    display: 'flex',
    flexGrow: 1,
    height: '63px'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appBarWrapper}>
        {!Security.isAuthorized() ? (
          <Redirect to={'/login'} />
        ) : (
          <AppBar position="static" className="grow">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Welcome
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Main);
