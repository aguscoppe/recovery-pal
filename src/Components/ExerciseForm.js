import { Grid, TextField, Button, Card, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const textFieldSpacing = {
  marginBottom: '20px',
};

const Exercise = ({ name }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px',
        marginBottom: '24px',
      }}
    >
      <Typography
        variant='h6'
        color={theme.palette.secondary.main}
        sx={{ marginBottom: '12px' }}
      >
        {name}
      </Typography>
      <TextField label='Peso (en kg)' fullWidth sx={textFieldSpacing} />
      <TextField label='Sets' fullWidth sx={textFieldSpacing} />
      <TextField label='Repeticiones' fullWidth sx={textFieldSpacing} />
    </Card>
  );
};

const ExerciseForm = ({ setCurrentForm, rutineData }) => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{ padding: '10vh 0' }}
    >
      <Grid item container alignItems='center' direction='column'>
        <Grid item xs={10} sm={6} md={4}>
          {rutineData.exercises.map((el) => (
            <Exercise name={el.exercise} />
          ))}
        </Grid>
        <Grid item paddingTop={3}>
          <Button
            size='large'
            variant='outlined'
            onClick={() => setCurrentForm(0)}
          >
            VOLVER
          </Button>
        </Grid>
        <Grid item paddingTop={3}>
          <Button variant='contained' size='large'>
            FINALIZAR
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExerciseForm;
