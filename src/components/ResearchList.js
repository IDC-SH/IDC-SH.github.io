import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid, Paper} from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

export default function ResearchList() {

    return(
        <div>
            

            <Container maxWidth='md'>
                <Grid container spacing={2} direction="raw" justifyContent="center" alignItems="flex-start">
                    <Grid item>
                        <Box sx={{height:300, width:400, backgroundColor:'primary.dark'}}>
                            <Typography variant='h2'>
                                Project1
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{height:300, width:400, backgroundColor:'primary.dark'}}>
                            <Typography variant='h2'>
                                    Project2
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{height:300, width:400, backgroundColor:'primary.dark'}}>
                            <Typography variant='h2'>
                                    Project3
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{height:300, width:400, backgroundColor:'primary.dark'}}>
                            <Typography variant='h2'>
                                    Project4
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{height:300, width:400, backgroundColor:'primary.dark'}}>
                            <Typography variant='h2'>
                                    Project5
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

               
            </Container>
           
        </div>
    );
}
