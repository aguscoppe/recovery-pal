import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import {
  Grid,
  Typography,
  Button,
  Modal,
  Box,
  Card,
  IconButton,
} from "@mui/material";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import { ejercicios } from "../ejercicios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ArrowBack, CheckCircle } from "@mui/icons-material";
import ReactPlayer from "react-player";
import * as React from "react";

function VideoDisplay() {
  const currentUser = useContext(UserContext);
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <Header title={ejercicios[id - 1].videoTitle} icon={<ArrowBack />} />
      <Grid container justifyContent="center" sx={{ padding: "10vh 0" }}>
        <Grid item xs={11} md={6}>
          <Typography variant="h3">{ejercicios[id - 1].videoTitle}</Typography>
          <ReactPlayer
            size="100%"
            controls
            url={ejercicios[id - 1].videoURL}
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
          <Typography variant="body1" marginTop="20px">
            {ejercicios[id - 1].instructions}
          </Typography>

          <Button
            onClick={handleOpen}
            fullWidth
            variant="contained"
            size="large"
          >
            Completado
          </Button>
         
        </Grid>
      </Grid>
      <NavBar />
       {/* MODAL STARTS */}
       <Modal
            open={open}
            onClose={handleClose}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Box bgcolor="background.paper">
              <Grid
                sx={{ p: "20px" }}
                container
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} xl={12} lg={12} md={12}>
                  <Typography
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                  >
                    <CheckCircle
                      sx={{
                        color: "#22BEE9",
                        position: "center",
                        fontSize: "100px",
                      }}
                    />
                  </Typography>
                  <Typography variant="h4">Felicitaciones</Typography>
                  <Typography
                    variant="body1"
                    marginTop="20px"
                    marginBottom="20px"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                  >
                    Has completado el ejercicio
                  </Typography>
                  <Typography>
                    
                  {/*<Button onClick={navigate(`/home/${ejercicios.id +1 }`)} fullWidth variant="contained" size="large">*/}
                  <Button onClick={() => { setOpen(false);
                  ejercicios[id].id === ejercicios.length ? navigate(`/home/${ejercicios[id].id}`): navigate('/home')
  }} fullWidth variant="contained" size="large">
                    Continuar
                  </Button>
                  </Typography>
                  <br />
                  <Typography>
                  {/*<Button onClick={navigate('/home')} fullWidth variant="contained" size="large">*/}
                  <Button onClick={() => {
    navigate('/home');
    setOpen(false)
  }} fullWidth variant="outlined" size="large">
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
