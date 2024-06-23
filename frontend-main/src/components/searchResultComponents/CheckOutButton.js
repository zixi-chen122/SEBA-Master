import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    float: 'right',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function CheckOutButton(props) {
  const classes = useStyles();
  const handleClick = (e) => {
    e.stopPropagation();
  }

  return (
    <div className={classes.root}>
      <span>{props.price}€</span>
      <Button
        
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Check Out
      </Button>
    </div>
  )
}