// Start
import React from 'react'

import {
  ThemeProvider, 
  createTheme,
  CssBaseline,
  Container,
  Button,
  Typography,
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
        <Typography variant="h4" gutterBottom>
          MUI Theme Challenge
        </Typography>
        <Typography>
          Update the theme to use dark mode and set the primary color to green.
        </Typography>
        <Button 
          variant='contained'
          sx={{
            my: 2
          }}
        >
          Primary
        </Button>
        <Button 
          color="secondary"
          variant='contained'
          sx={{
            m: 2
          }}
        >
          Secondary
        </Button>
      </Container>
    </ThemeProvider>
  )
}
