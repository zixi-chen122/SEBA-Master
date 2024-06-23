import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList({reviews,...props}) {
  const classes = useStyles();
  console.log(reviews)
  const commentsList = () => { return reviews.length ? reviews.length : []}
  // reviews.filter(review => word.length > 6);
  // console.log(commentsList())
  return (
    <List className={classes.root}>
      {reviews.map((item,index) => (
        item.comment ?
        <React.Fragment
          key={index}
        >
          <ListItem alignItems="flex-start"
            key={index}>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {item.comment}
            </Typography>
          </ListItem>
          <Divider />
        </React.Fragment>
        : <React.Fragment />
        
      ))}
      
      
    </List>
  );
}
