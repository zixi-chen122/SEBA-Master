import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CheckOutButton from './CheckOutButton';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    overflow: 'auto',
    display: 'block',
    backgroundColor: theme.palette.background.paper,
  },

}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function SimpleList(props) {
  const classes = useStyles();
  const { resultList } = props
  const [shop, setShop] = React.useState('');

  return (
    <div className={classes.root}>
      <List component="nav"
        onMouseLeave={() => props.setHoveredIndex(null)}
      >
        {resultList.map((item, index) =>
          <ListItem
            key={index}
            button
            style={{'cursor':'default'}}
            onMouseEnter={() => { props.setHoveredIndex(index); console.log("mouseover", index) }}
          >
            <div style={{ 'width': '100%', 'position': 'relative' }}>
              CopyShop{item.id}
              <CheckOutButton 
                price={item.price}
              />
            </div>
          </ListItem>

        )}

      </List>
    </div>
  );
}