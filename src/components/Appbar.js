import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function MyAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
        <Grid container spacing={1} direction="row" justifyContent="space-between" alignItems="center">
          <Grid item xs={2} sx={{ display: { xs: 'none', xl: 'block'} }}></Grid>

          <Grid item xs={2}>
            <Link to={"/"} style={{ textDecoration: 'none' }}>
              <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    // sx={{ ml: 40}}
                >
                  <SportsEsportsIcon sx={{color:"inherit"}}/>
              </IconButton>
            </Link>
          </Grid>
          
          <Grid item xs={1}>
            
            {/*sx={{mx:5  }}*/}
            <Link to={"/research"} style={{ textDecoration: 'none' }}>
                <Typography variant="h6" component="div" sx={{fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                  Research
                </Typography>
            </Link>
          </Grid>
          
          <Grid item xs={1}>
            <Link to={"/people"} style={{ textDecoration: 'none' }}>
              <Typography variant="h6" component="div" sx={{fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                  People
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={4} sx={{display: { xs: 'block', sm: 'block', md:'none'}}}>
            <Typography variant="h6" component="div" sx={{textAlign: 'center'}}>
                ShLab
            </Typography>
          </Grid>


          <Grid item xs={1}>
            <Link to={"/news"} style={{ textDecoration: 'none' }}>
              <Typography variant="h6" component="div" sx={{fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                  News
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link to={"/joinus"} style={{ textDecoration: 'none' }}>
              <Typography variant="h6" component="div" sx={{fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>{/*sx={{ ml:5, mr:20 }}*/}
                  JoinUs
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={2} sx={{ display: { xs: 'none', xl: 'block'}}}></Grid>

          <Grid item xs={2}> 
            <Search sx={{ml:1}}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          </Grid>

          
            
        </Grid>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}