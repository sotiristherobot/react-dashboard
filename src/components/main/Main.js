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
import axios from 'axios';

const styles = {
  root: {
    flexGrow: 1
  },
  appBarWrapper: {
    flexGrow: 1,
    height: '63px'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbar: {
    justifyContent: 'space-around'
  },
  gridSearchRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQueryValue: '',
      //TODO convert this to array of object images
      images: ''
    };
    this.searchQueryHandler = this.searchQueryHandler.bind(this);
    this.fetchImages = this.fetchImages.bind(this);
  }

  /**
   * Handles the onChange event of child <SearchBar/> component. Sets the value to local state
   * @param {object} e
   */
  searchQueryHandler(e) {
    this.setState({
      searchQueryValue: e.target.value
    });
  }

  /**
   * Fetch artifacts from API
   * @returns {AxiosPromise<any>}
  */
  fetchImages() {
    return axios.get('https://be26ac49-7bfe-4455-bf43-c6c0ef539c97.mock.pstmn.io/artifacts')
  }

  /**
   * On componentDidMount fetch the images and update state.
  */
  componentDidMount() {
    this.fetchImages().then( res => {
      this.setState({...this.state, images: res.data.data[0].imgUrl }) //TODO simplify this add multiple images
    });
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
            <Grid item xs={12} className={classes.gridSearchRow}>
              <SearchBar searchQueryHandler={this.searchQueryHandler} />
            </Grid>
            <Grid item xs={12} className={classes.gridSearchRow}>
              <img src={this.state.images && this.state.images}/>
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(Main);
