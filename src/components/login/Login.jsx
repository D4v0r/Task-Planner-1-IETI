import { Grid, 
         Button, 
         InputLabel, 
         FormControl, 
         Input, 
         InputAdornment, 
         IconButton, 
         Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import 'fontsource-roboto';
import clsx from 'clsx';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LoginImg from './login.jpg';
import {Link as RouterLink } from "react-router-dom"
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { users }    from '../../data/users';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '30ch',
    },
    img:{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "19%",
        borderRadius: "20px",
    }
  }));

export const Login= props => {


    const classes = useStyles();
    const [values, setValues] = React.useState({
        user: '',
        password: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const signin = () =>{
        console.log(values.user, values.password);
        console.log(users[values.user]);
        if ( users[values.user].password === values.password){
            localStorage.setItem("signedIn", true);
            window.location.href ="/planner";

        }else{
            alert("woops bad user or password");
        }

    }
    return(
            <Paper elevation={4} alignItems="center" justify="center">
                <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                >
                    <Typography component="h1" variant="h3">
                        Task planner
                    </Typography>
                </Grid>
                <img className={classes.img} src={LoginImg} alt="task-planner"/>
                <form autoComplete="off" onSubmit={ signin }>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item>
                        <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="user">User</InputLabel>
                                <Input
                                    id="user"
                                    type="text"
                                    value={values.user}
                                    onChange={handleChange('user')}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={9}>
                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" 
                                    fullWidth size="large" 
                                    type="submit"
                                    className={classes.textField}>  Log In  </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link component={RouterLink} to="/register" variant="body2"> Create Account </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        );
}