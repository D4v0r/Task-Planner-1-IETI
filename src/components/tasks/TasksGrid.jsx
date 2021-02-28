import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import { TaskCard } from './TaskCard';

const useStyles = makeStyles( theme => ({
    grid: {
        paddingTop: theme.spacing(7),
        paddingBottom: theme.spacing(7),
      },
}));
export const TasksGrid = ({tasks}) => {

    const classes = useStyles();

    return(
        <Grid container
        justify="space-between"
        alignItems="center"
        alignContent="center"
        direction="column" 
        className={ classes.grid }
        spacing={3}>
            {
                tasks.map( task => (
                    <Grid item xs={12}>
                        <TaskCard {...task} />
                    </Grid>
                ))
            }
    </Grid>   
    );
}