import * as React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import ElevateAppBar from '../components/ElevateAppbar';
import PublicationList  from '../components/PublicationList';

class PublicationPage extends React.Component{

    render(){
        return(
            <div>
                <ElevateAppBar/>
               <Container maxWidth="lg" sx={{mt:10}}>
                <PublicationList/>   
               </Container>

            </div>
            

        )
    }
}

export default PublicationPage;