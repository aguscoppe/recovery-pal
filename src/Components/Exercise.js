import { Grid, Card, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import ReactPlayer from 'react-player';

const Exercise = ({ id, name, description, imgSrc, action, isComplete }) => {
  const currentUser = useContext(UserContext);

  return (
    <Link
      to={action ? '' : `/home/Mi%20Rutina/${id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={isComplete ? { border: '2px solid green' } : {}}>
        <Grid container alignItems='center'>
          <Grid item xs={action || isComplete ? 5 : 6} margin='10px'>
          <ReactPlayer
              light
              url={imgSrc}
              width='100%'
              height='100%'
            />
          </Grid>
          <Grid item xs={4} margin='10px'>
            <Typography variant='h6' sx={{ fontWeight: '500' }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: '12px' }}>{description}</Typography>
          </Grid>
          {action && (
            <Grid item xs={1}>
              <IconButton onClick={action.function}>
                {action.type === 'add' && (
                  <AddCircleIcon sx={{ color: 'lightblue' }} />
                )}
                {action.type === 'remove' && (
                  <DeleteIcon sx={{ color: 'red' }} />
                )}
              </IconButton>
            </Grid>
          )}
          {isComplete && (
            <Grid item xs={1}>
              <IconButton>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </Card>
    </Link>
  );
};

export default Exercise;
