import './App.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <div className="App">
      <Typography gutterBottom variant='h3' align='center'>
        <Box sx={{ fontWeight: "bold" }}>React App</Box>
      </Typography>

      <Card style={{ maxwidth: "750px", margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={4} item>
                <TextField
                  placeholder='Enter First Name'
                  label="First Name"
                  variant='outlined'
                  fullWidth
                  required />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField label="Middle Name" placeholder='Enter Middle Name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField label="Last Name" placeholder='Enter Last Name' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type="email" label="Email" placeholder='Enter email address' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type="number" label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant='outlined' fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
