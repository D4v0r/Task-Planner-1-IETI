import React from 'react';
import 'fontsource-roboto';
import { SwipeableDrawer, 
         Grid, 
        Avatar, 
        Typography, 
        Divider, 
        List, 
        ListItem, 
        ListItemIcon, 
        ListItemText,
        makeStyles, 
        Badge,
        withStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useStyles } from './MainViewStyles';




const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);

export const Drawer = ({open, close, variant}) =>{

    const classes = useStyles();
    const signOut = () => {
        localStorage.setItem("signedIn", false);
        window.location.href = "/";
    }

    return(
        <SwipeableDrawer
            anchor="left"
            onOpen={ open } 
            onClose={ close }
            variant={ variant }
            className={ classes.drawer }
            classes={{
                paper: classes.drawerPaper,
              }}

        >
            <Grid container 
                  className={ classes.root } 
            >
                <Grid item className={ classes.margin }>
                    <StyledBadge
                        overlap="circle"
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        variant="dot"
                    >     
                        <Avatar>
                            <PersonIcon/>
                        </Avatar>
                    </StyledBadge>
                </Grid>
                <Grid item sclassName={ classes.margin }>
                    <Typography >User Test </Typography>
                    <Typography >user.test@test.com </Typography>
                </Grid>
            </Grid>
            <Divider/>
            <List>
                <ListItem button onClick={ signOut }>
                    <ListItemIcon>
                        <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText>Sign Out</ListItemText>
                </ListItem>
            </List>
        </SwipeableDrawer>
    );
    
} 