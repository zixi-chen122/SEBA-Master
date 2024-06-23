import React from 'react';
import Dialog from '@material-ui/core/Dialog';

// import { blue } from '@material-ui/core/colors';

// const emails = ['username@gmail.com', 'user02@gmail.com'];
// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });

export default function ReviewDialog(props) {
    // const classes = useStyles();
    const { open, onClose, shopId } = props;
    
    // const onClose = () => {
    //     // onClose(selectedValue);
    //     console.log("whhy??????????")
    //     props.test('res')
    //   };
    // const handleClose = () => {
    //   // onClose(selectedValue);
    //   // console.log("whhy??????????")
    //   onClose();
    // };
      // const handleListItemClick = (value) => {
    //   onClose(value);
    // };
  
    return (
      <Dialog 
        open={open}
        onClose={onClose}
      >
        <div style={{width:'500px',height:'300px'}}>
        <span>Copy Shop {shopId}</span>
        <span></span>
        </div>
      </Dialog>
    );
  }
  


