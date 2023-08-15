import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar sx={{height:60, bgcolor:'common.black'}}>
          <Toolbar>
            <Container maxWidth='lg'>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={2}>
                    
                    {/*sx={{mx:5  }}*/}
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                        <Box component="div" sx={{fontSize: 20, fontStyle: 'normal',color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                        Home
                        </Box>
                    </Link>
                </Grid>

                {/* <Grid item xs={2}>
                    <Link to={"/research"} style={{ textDecoration: 'none' }}>
                        <Box component="div" sx={{fontSize: 20, fontStyle: 'normal',color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                        Research
                        </Box>
                    </Link>
                </Grid> */}
                
                <Grid item xs={2}>
                    <Link to={"/publication"} style={{ textDecoration: 'none' }}>
                    <Typography component="div" sx={{fontSize: 20, fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                        Publications
                    </Typography>
                    </Link>
                </Grid>

                <Grid item xs={1} sx={{display: { xs: 'block', sm: 'block', md:'none'}}}>
                    <Typography  component="div" sx={{fontSize: 20, fontStyle: 'normal', color:'common.white',textAlign: 'center'}}>
                        
                    </Typography>
                </Grid>


                <Grid item xs={2}>
                    <Link to={"/news"} style={{ textDecoration: 'none' }}>
                    <Typography component="div" sx={{fontSize: 20,fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>
                        News
                    </Typography>
                    </Link>
                </Grid>

                <Grid item xs={2}>
                    <Link to={"/joinus"} style={{ textDecoration: 'none' }}>
                    <Typography  component="div" sx={{fontSize: 20, fontStyle: 'normal', color:'common.white', textAlign: 'center',display: { xs: 'none', md: 'block', xl: 'block'}}}>{/*sx={{ ml:5, mr:20 }}*/}
                        Join Us
                    </Typography>
                    </Link>
                </Grid> 
            </Grid>
            </Container>
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}