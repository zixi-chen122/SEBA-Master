import React from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


// const useStyles = makeStyles((theme) => ({
//   toolbar: {
//       flexGrow: 1,
//   },
//   title: {
//       flexGrow: 1,
//       paddingLeft: theme.spacing(1),
//   },
// }));

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

const useStyles = makeStyles((theme) => ({
  toolbar: {
      flexGrow: 1,
  },
  title: {
      flexGrow: 1,
      paddingLeft: theme.spacing(1),
  },
}));


function Header(props) {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = React.useState(false);
  // console.log(open)
  // const anchorRef = React.useRef(null);
  // console.log(anchorRef)
  // const handleClose=()=>{setOpen(false)}
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}
            onClick={() => props.history.push("/")}>
            Copify
          </Typography>
          <Button
            color="inherit"
            onClick={() => props.history.push("/login")}
          >
            login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);

