import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid, Paper} from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import papersJson from '../data/papers.json';

export default function PublicationList() {

  var papers = papersJson;

  return (

      <div>
        {/* <ResearchItem/> */}
        {papers.map((item, i) => <PaperItem key={i} item={item}/>)}
        
      </div>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[800]),
  backgroundColor: grey[800],
  '&:hover': {
    backgroundColor: grey[700],
  },
}));


function PaperItem(props)
{
  return(
    <Box sx={{ mb:3}}>
      <Grid container spacing={1} direction="row" justifyContent="center" alignItems="flex-start">
        <Grid xs={3}>
        <Box 
          sx={{borderRadius: '16px'}} 
          component="img" 
          src={props.item.img} 
          minHeight={150} 
          width="100%"/>
        </Grid>
        <Grid xs={9}> 
          {/* <Grid container spacing={5} direction="column"> */}
              <Grid xs={12}>
                <Typography variant="h7" gutterBottom sx={{fontWeight: 'bold', mt:2,ml:2}}>
                  {props.item.title} 
                </Typography>
              </Grid>
              <Typography variant="body1" sx={{mt:2,ml:2}}>
                  {props.item.author}
                </Typography>
              <Grid xs={12}>
                
              </Grid>

              <Grid xs={12}>
                <Typography variant="body1" sx={{mt:1,ml:2,fontStyle: 'italic'}}>
                  {props.item.publish}
                </Typography>
              </Grid>

              <Grid>
                <Box sx={{mt:1,ml:2,mb:1, display: 'grid',gridTemplateColumns:'repeat(3, 70px)'}}>
                  {props.item.button1 && 
                  <Box sx={{gridRow: '1'}}>
                    <ColorButton href={props.item.paper_link}>Paper</ColorButton> 
                    {/* <Button variant="contained" size="small" >Paper</Button> */}
                  </Box>}
                  {props.item.button2 && 
                  <Box sx={{gridRow: '1',}}>
                    <ColorButton href={props.item.code_link}>Code</ColorButton> 
                    {/* <Button variant="outlined" size="small">Code</Button> */}
                  </Box>}
                  {props.item.button4 && 
                  <Box sx={{gridRow: '1', width:'small'}}>
                    <ColorButton href={props.item.video_link}>Video</ColorButton> 
                    {/* <Button variant="outlined" size="small">Video</Button> */}
                  </Box>} 
                  {props.item.button3 && 
                  <Box sx={{gridRow: '1', width:150}}>
                    <ColorButton href={props.item.page_link}>Project page</ColorButton> 
                    {/* <Button variant="outlined" size="small">Project page</Button> */}
                  </Box>}  
                  
                </Box>
              </Grid>

        </Grid>
      </Grid>
    </Box>
  )

}