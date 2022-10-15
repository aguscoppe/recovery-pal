import { Grid, Typography, Button, Modal, Box } from '@mui/material';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import { exercises } from '../data';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ReactPlayer from 'react-player';
import * as React from 'react';
import { useState } from 'react';

function VideoDisplay() {
  const { idExercise } = useParams();
  const [exercise] = exercises.filter((e) => e.id === idExercise);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [modal, setModal] = useState({ type: 'success', open: false });
  const handleClick = () => {
    console.log(
      'Aca va la llamada al backend. Si recibo 200 OK modal success, sino otro.'
    );
    setModal({ type: 'success', open: true });
  };

  return (
    <>
      <Header title={exercise.videoTitle} icon={<FitnessCenterIcon />} />
      <Grid container justifyContent='center' sx={{ padding: '10vh 0' }}>
        <Grid item xs={11} md={6}>
          <Typography variant='h3'>{exercise.videoTitle}</Typography>
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <ReactPlayer
              size='100%'
              controls
              url={exercise.videoURL}
              onReady={() => console.log('onReady callback')}
              onStart={() => console.log('onStart callback')}
              onPause={() => console.log('onPause callback')}
              onEnded={() => console.log('onEnded callback')}
              onError={() => console.log('onError callback')}
            />
          </div>
          <Typography variant='body1' marginTop='20px'>
            {exercise.instructions}
          </Typography>
          {/*
          <Button
            onClick={handleClick}
            fullWidth
            variant="contained"
            size="large"
          >
          */}
          <Button
            onClick={handleOpen}
            fullWidth
            variant='contained'
            size='large'
          >
            Completado
          </Button>
        </Grid>
      </Grid>
      <NavBar />
      {/* MODAL STARTS */}
      {/*
       <ModalAlert
          open={modal.open}
          type={modal.type}
          title="Felicitaciones!"
          subtitle="Has completado el ejercicio"
          primaryBtnText="Continuar"
          primaryBtnPage="/home"
          secondaryBtnText="Volver"
          secondaryBtnPage={ejercicios[id].id === ejercicios.length ? navigate(`/home/${ejercicios[id].id}`): navigate('/home')}
        />
        */}
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Box bgcolor='background.paper'>
          <Grid
            sx={{ p: '20px' }}
            container
            alignItems='center'
            justifyContent='center'
          >
            <Grid item xs={12} xl={12} lg={12} md={12}>
              <Typography
                alignItems='center'
                justifyContent='center'
                display='flex'
              >
                <CheckCircle
                  sx={{
                    color: '#22BEE9',
                    position: 'center',
                    fontSize: '100px',
                  }}
                />
              </Typography>
              <Typography variant='h4'>Felicitaciones</Typography>
              <Typography
                variant='body1'
                marginTop='20px'
                marginBottom='20px'
                alignItems='center'
                justifyContent='center'
                display='flex'
              >
                Has completado el ejercicio
              </Typography>
              <Typography>
                {/*<Button onClick={navigate(`/home/${ejercicios.id +1 }`)} fullWidth variant="contained" size="large">*/}
                <Button
                  onClick={() => {
                    setOpen(false);
                    exercises[idExercise].id === exercises.length
                      ? navigate(`/home/${exercises[idExercise].id}`)
                      : navigate('/home');
                  }}
                  fullWidth
                  variant='contained'
                  size='large'
                >
                  Continuar
                </Button>
              </Typography>
              <br />
              <Typography>
                {/*<Button onClick={navigate('/home')} fullWidth variant="contained" size="large">*/}
                <Button
                  onClick={() => {
                    navigate('/home');
                    setOpen(false);
                  }}
                  fullWidth
                  variant='outlined'
                  size='large'
                >
                  Volver
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default VideoDisplay;
