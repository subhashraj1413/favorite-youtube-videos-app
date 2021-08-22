import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { isYouTubeVideoValid } from "../../utils/helper";
import { useDispatch } from "react-redux";
import {
  fetchFavoriteList,
} from "../../core/actionCreators/favoriteListActions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AddVideoFormModalProps {
  openModal: boolean;
  onClose(): void;
  rootRef: HTMLDivElement | any;
}
const AddVideoFormModal = (props: AddVideoFormModalProps) => {
  const { openModal = false, onClose, rootRef = null } = props;
  const [value, setValue] = React.useState<string>("");
  const [isValidUrl, setIsValidUrl] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleFieldChange = (e: any) => {
    setIsValidUrl(isYouTubeVideoValid(e.target.value) ? true : false);

    setValue(e.target.value);
  };

  const onHandleSubmit = () => {
    if (isValidUrl) {
      dispatch(
        fetchFavoriteList({
          url: value,
        })
      );
      setValue("");
      onClose()
    }
  }
  return (
    <div ref={rootRef}>
      <Dialog
        open={openModal}
        onClose={() => onClose()}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        keepMounted
        container={() => rootRef.current}
      >
        <DialogTitle id="form-dialog-title">
          Add Your Favorite YouTube Video
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Save your favorite YouTube video, please copy the valid YouTube
            video link and paste it here. We will save your videos in your
            favorite list.
          </DialogContentText>
          <TextField
            autoFocus
            value={value}
            margin="dense"
            id="youTubeLink"
            label="Paste your YouTube video Link"
            type="text"
            fullWidth
            onChange={handleFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onHandleSubmit}
            color="primary"
            disabled={!isValidUrl}
          >
            Add to Fav List
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddVideoFormModal;
