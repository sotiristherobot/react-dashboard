import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Security from '../../helpers/Security';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'column',
    marginTop: theme.spacing.unit * 16,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 400,
      minHeight: 250,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  submit: {
    marginTop: theme.spacing.unit * 7,
    maxWidth: '70%'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
    //TODO Moved state up to a higher component.
    this.state = {
      username: null,
      password: null
    };
    this.submitButtonHandler = this.submitButtonHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  /**
   * Component cycle event.
   * 1. If we are already authorized, then redirect user to main
  */
  componentWillMount() {
    if (Security.isAuthorized()) {
      this.props.history.replace('/');
    }
  }

  /**
   * Click handler for the submit button. Stops propagation and prevents default form behavior.
   * Will be used to submit form to backend
   * @param e -- object
   */
  submitButtonHandler(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Change handler for textfields. Sets the values to state
   * @param e -- {object}
   */
  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.formWrapper} elevation={5}>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              name="username"
              label="UserName"
              type="text"
              className={classes.textField}
              onChange={this.changeHandler}
              margin="normal"
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              className={classes.textField}
              onChange={this.changeHandler}
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.submitButtonHandler}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(Login);
