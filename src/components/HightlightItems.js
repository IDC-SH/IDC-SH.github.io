import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Grid, Paper, Button, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Highlights from '../data/highlight.json';

export default function HightlightItems(props) 
{
    return (
        <div>
            <Carousel>
                {
                    Highlights.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <br/>
        </div>
        
    )
}

function Item(props)
{
    return (
        <Grid container direction="raw" justifyContent="center" alignItems="flex-start">
            <Grid item xs={9}>
                <Box sx={{borderRadius: '16px'}} component="img" src={props.item.img} minHeight={350} width="100%"/>
            </Grid>
            <Grid item xs={3}>
                <Box height={300} sx={{ml:5}}>
                <   Typography sx={{mt:0, color:"common.black",textAlign: 'left', fontSize:15, fontWeight:"bold", lineHeight:1.2, fontStyle: 'normal'}}>
                        {props.item.title}
                    </Typography>
                    <Typography sx={{mt:1, color:"common.black",textAlign: 'justify', fontSize:10 ,fontWeight:"light", lineHeight:1.1,fontStyle: 'normal'}}>
                        {props.item.description}
                    </Typography>
                </Box>
            </Grid>

            {/* </Paper> */}
        </Grid>
    )
}