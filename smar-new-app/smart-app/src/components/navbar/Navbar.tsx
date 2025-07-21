import React from 'react'
import { Box, Container, Grid, Paper, InputBase, IconButton, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <>
    <Box sx={{
        '& .css-ymebhg-MuiContainer-root': {
          minWidth: '300px'  
        },

      }}>
        <Container
          sx={{
             maxWidth: '100% !important',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;',
            margin: '0',
            padding: '0',
            height: '65px'
          }}>
          <Stack 
          sx={{marginLeft: '54px'}}
          >
            <img 
            src='https://storage.googleapis.com/valeo-cp2096.appspot.com/img/smartui-logo.png' alt="smart_Ui" />
          </Stack>
          <Stack>
            <Paper
              component="form"
              sx={{
                p: '2px 4px', display: 'flex', alignItems: 'center', width: 250, borderRadius: '4px', border: '1px solid #ccc', height: '40px',
                boxShadow: 'none',
              }}
            >
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search google maps' }}
              />

            </Paper>
          </Stack>
        </Container>
      </Box >
    </>
  )
}

export default Navbar