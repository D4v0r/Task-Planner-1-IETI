import React, {useState} from 'react';
import { Drawer } from './Drawer';
import 'fontsource-roboto';
import {Typography, AppBar, Toolbar} from '@material-ui/core';
import { useStyles } from './MainViewStyles';
import tasks from '../data/tasks';
import { TasksGrid } from './tasks/TasksGrid';


export const MainView = props =>{

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const drawerToggle = () =>{
        setOpen(!open);
    }

    return(
        <div className={ classes.root }>
              <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Task Planner
                    </Typography>
                </Toolbar>
              </AppBar>
              <Drawer variant="permanent"
                      open={ open }
                      onClose={ drawerToggle }

              />
              <TasksGrid tasks={ tasks } />
        </div>
    );
};