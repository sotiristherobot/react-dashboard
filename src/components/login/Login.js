import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexFlow: 'column',
        marginTop: theme.spacing.unit * 8,
        width: 'auto',
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%'
    },
    submit: {
        marginTop: theme.spacing.unit * 3
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
    submitButtonHandler(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.formWrapper} elevation={1}>
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
