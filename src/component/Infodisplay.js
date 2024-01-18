import { Box, Skeleton, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import './componentstyle.css'
import { useState, useEffect } from "react";

const Display = ({location, ip, isp, region}) => {

const [newip, setnewip] = useState('');
const [newlocation, setnewlocation] = useState('');
const [newisp, setnewisp] = useState('')
const [newregion, setnewregion] = useState('')

useEffect(() => {
    setnewip({ip});
    setnewisp({isp});
    setnewlocation({location});
    setnewregion({region})
  }, [ip, isp, location, region]); 







    return <Stack sx={{
        bgcolor: 'white',
        borderRadius: '20px',
        width: '70%'
        
    }} className="infoholder">
        <Stack  Spacing="-15rem" sx={{
justifyContent: 'space-around',
flexDirection: {
    md: 'row',
    xs: 'column'
}
}}>
            <Box > 
                <Typography variant="body2" sx={{
                    fontSize: {
                        md: '16px',
                        sx: '10px'
                    }
                }}>IP Address</Typography>
                {newip ? ( <Typography variant="h6" sx={{
                    fontSize: {
                        md: '16px',
                        sx: '1px'
                    }
                }}>{ip}</Typography>)
            : <Skeleton variant="text" width={120}height={40}  animation="wave" />    
            }

            </Box>
            <Divider sx={{ height: 38, m: {md: 0.5, xs: 0} }}  orientation="vertical" className="divider" />
            <Box>
                
                <Box>
                <Typography variant="body2">Location</Typography>
                
                {newregion ? ( <Typography variant="h6">{region}</Typography>)
            : <Skeleton variant="text" width={120}height={40}  animation="wave" />    
            }

            </Box>

            </Box>
            <Divider sx={{ height: 38, m: {md: 0.5, xs: 0}} } className="divider" orientation="vertical" />
            <Box>
                <Typography variant="body2">Timezone</Typography>
                
                {newlocation ? ( <Typography variant="h6">{location.timezone}</Typography>)
            : <Skeleton variant="text" width={120}height={40}  animation="wave" />    
            }

            </Box>
            <Divider className="divider" sx={{ height: 38, m: {md: 0.5, xs: 0} }} orientation="vertical" />
            <Box>
                <Typography variant="body2">ISP</Typography>
               
                {newisp ? ( <Typography variant="h6">{isp}</Typography>)
            : <Skeleton variant="text" width={120}height={40} animation="wave" />    
            }

            </Box>
            
            
        </Stack>
    </Stack>;
}
 
export default Display;