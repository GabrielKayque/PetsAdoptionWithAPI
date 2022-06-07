import type { NextPage } from 'next';
import List from '../ui/components/list/List';
import Title from '../ui/components/title/Title';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/useindex';


const Home: NextPage = () => {
  const {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    amount,
    setAmount,
    message,
    setMessage,
  } = useIndex()


  return (
    <div>
      <Title 
        title='JOGOS'
        subtitle={
          <span>with a small monthly donation, <br />
            you <strong>can adopt a pet virtually</strong>
          </span>
        } 
      />

      <List
        pets={petList}
        onSelect={(pet) => setSelectedPet(pet)}
      /> 

      <Dialog 
        open={selectedPet !== null}
        onClose={() => setSelectedPet(null)}
        fullWidth
        PaperProps={{ sx: { p: 5 } }} 
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Amount($)/ Month'}
              type={'number'}
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={'secondary'} onClick={() => setSelectedPet(null)}>Cancel</Button>
          <Button variant={'contained'}>Confirm</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={message.length > 0} 
        message={message} 
        autoHideDuration={3000}
        onClose={() => setMessage('')}
      />
    </div>
  )
}

export default Home
