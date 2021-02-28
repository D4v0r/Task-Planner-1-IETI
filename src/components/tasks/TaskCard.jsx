import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { teal, amber, lime } from '@material-ui/core/colors';
import {Typography, Card,  CardContent, Grid, makeStyles, Divider} from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    card: {
        maxWidth : '360px',
        minWidth: '260px',
        height: '200px',
    },
}));

export const TaskCard = ({description, responsible:{name}, status, dueDate}) => {

    const classes = useStyles();

    const getTaskIconProgress = ()  => {

        switch (status.toUpperCase()) {
            case "IN PROGRESS":
                return <DonutLargeIcon style={{color: amber['500']}}/>;

            case "COMPLETED":
                return <CheckCircleIcon style={{ color: teal['A400'] }}/>;
        
            default:
                return <EventAvailableIcon style={{color: lime['500']}}/>;
        }
    };

    return(
        <Card className={ classes.card }>
            <CardContent>
                <Grid container alignItems="center" justify="center" direction="column">
                    <Grid item>
                        {getTaskIconProgress()}
                    </Grid>
                    <Grid>
                        <Typography variant="h6" noWrap color="primary"> 
                            {description} 
                        </Typography>
                    </Grid>     
                </Grid>
                <Divider/>
                <Typography variant="body1" noWrap color="secondary" component="p" > 
                    {status}
                </Typography>
                <Typography variant="body1" noWrap color="textPrimary" component="p" > 
                    {name}
                </Typography>
                <Typography variant="body1" >
                    {new Date(dueDate).toISOString().split('T')[0]}
                </Typography>
            </CardContent>
        </Card>
    );

}