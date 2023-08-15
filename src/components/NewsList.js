import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {Grid, LinearProgress, Paper} from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import News from '../data/news.json';
import Link from '@mui/material/Link';

export default function NewsList() {

    return(
        <div>
            <Box sx={{mt:10}}>
                {News.map((item, i) => <NewsItem key={i} item={item}/>)}
            </Box>      
        </div>
    );
}

function NewsItem(props)
{
    return(
        <Box sx={{mb:10}}>
            <Typography sx={{fontSize:40}}>
                {props.item.year}
            </Typography>
            {props.item.items.map((line, i) => 
                
                <Typography sx={{ml:3, fontSize:18, mb:2}}>
                    <CalendarMonthIcon sx={{color:"#f44336", mr:2}}/>
                    {line} {props.item.links[i]!="" && <Link href={props.item.links[i]}>more</Link>}
                    
                </Typography>
            )}
        </Box>
    )
}

