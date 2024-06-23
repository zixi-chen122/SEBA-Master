import Button from '@material-ui/core/Button';


export default function TestBtn(props) {
  return (
      <Button variant="contained"
        onClick={props.onCheckOut}
      >
        Check Out
      </Button>
  );
}


