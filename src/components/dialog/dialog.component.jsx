import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const DialogPopup = (props) => {
  const { onClose, selectedValue, open, specialities } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Choose speciality</DialogTitle>
      <List>
        
        {specialities && specialities.map((speciality) => (
          <ListItem button onClick={() => handleListItemClick(speciality)} key={speciality.id}>
            <ListItemText primary={speciality.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default DialogPopup;