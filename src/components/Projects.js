import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../index.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <div className="projects-div" style={{ 'marginBottom': '25px'}}>
        <h1 style={{'marginBottom': '30px', 'marginTop': '25px'}}>Projects I have worked on</h1>

      <Button style={{'fontSize': '25px', 'marginRight': '15px'}} onClick={handleOpen}>E-Coach</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="black" id="modal-modal-title" variant="h6" component="h2">
            A platform for coaching institues to organise classes in smooth manner, on the web!
          </Typography>
          <Typography color="black" id="modal-modal-description" sx={{ mt: 2 }}>
            Technologies used: Java Enterprise Edition, JavaScript, Bootstrap, HTML, CSS, MySQL
          </Typography>
        </Box>
      </Modal>



      <Button style={{'fontSize': '25px', 'marginRight': '15px'}} onClick={handleOpen1}>DigiMandi</Button>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="black" id="modal-modal-title" variant="h6" component="h2">
            An online market-place for farmers where agriculture goods can be sold and purchased
          </Typography>
          <Typography color="black" id="modal-modal-description" sx={{ mt: 2 }}>
          Technologies used: Java Enterprise Edition, JavaScript, Bootstrap, HTML, CSS, MySQL
          </Typography>
        </Box>
      </Modal>


      <Button style={{'fontSize': '25px', 'marginRight': '15px'}} onClick={handleOpen2}>Crypto Insights</Button>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="black" id="modal-modal-title" variant="h6" component="h2">
          A website for checking the current rates of various cryptocurrencies
          </Typography>
          <Typography color="black" id="modal-modal-description" sx={{ mt: 2 }}>
          Technologies used: React JS, Bootstrap, Nomics API
          <br style={{'textAlign': 'center'}} />
          <a target="_blank" href="https://github.com/ritikdubey/cryptocurrency-rates-react"><button>Github</button></a>
          </Typography>
        </Box>
      </Modal>

     

    </div>
  );
}

export default BasicModal;