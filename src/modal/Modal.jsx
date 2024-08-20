import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ReactDOM from "react-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalWithPortal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalRoot = document.getElementById("modal-root");

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      {open &&
        modalRoot &&
        ReactDOM.createPortal(
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                ut repudiandae labore odio quidem, quia tempore non voluptatibus
                soluta atque necessitatibus blanditiis animi sit ipsum obcaecati
                aliquam debitis suscipit est earum dolor rerum dolorem
                consequatur. At veniam qui, saepe, ab mollitia optio doloribus,
                similique possimus officia soluta incidunt consectetur!
                Obcaecati?
              </Typography>
            </Box>
          </Modal>,
          modalRoot
        )}
    </div>
  );
}
