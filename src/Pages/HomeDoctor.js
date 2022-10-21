import { Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import PatientCard from '../Components/PatientCard';
import { patient } from '../data';

/* Esta pagina es el home que deberia ver el doctor con la lista de sus pacientes aun no conectada con el back */
const HomeDoctor = () => {
  return (
    <>
      <Header title="Pacientes" icon={<HomeIcon />} />
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ paddingTop: '8vh' }}
      >
        <Grid item xs={11} md={6}>
          <Typography variant="h4" fontWeight="600" align="center">
            Mis Pacientes
          </Typography>
        </Grid>
        <PatientCard patient={patient} />
      </Grid>
      <NavBar />
    </>
  );
};

export default HomeDoctor;
