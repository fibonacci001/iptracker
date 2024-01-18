import { Box, IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './componentstyle.css'
import { useRef, useState } from "react";
const Hero = ({onSearch}) => {
    const [textval, settextval] = useState("")
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("just ran");
        // get the value of the input from the ref
        
        // pass the value to the onSearch prop
        onSearch(textval);

        console.log(textval)
        settextval("")
        // clear the input value
        
      };
      
      
    return <Stack className="Heroinputholder">
        <Stack sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }} className="Heroinput">  
            <Typography variant="h6" sx={{
                color: 'white',
                marginBottom: '1.5rem'
            }}>IP Address Tracker</Typography>
             
            <Paper
            component="form"
            onSubmit={handleSubmit}
            
            sx={{ p: '2px 4px', display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
             borderRadius: '10px', 
             width: {
                md: 400, // width on medium screens and above
                xs: 300, // width on extra-small screens and below
              } }}
            >
                
                <InputBase 
                
                value={textval}
                onChange={e => {settextval(e.target.value)}}
                sx={{ ml: 1, flex: 1, 
                    
                }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Box bg="success" sx={{
                    bgcolor: 'black',
                    borderTopRightRadius: '10px',
                    borderBottomRightRadius: '10px'
                }}>
                <IconButton 
                   type="submit"
                sx={{ p: '10px', color: 'white' }}    
                aria-label="search">
                <KeyboardArrowRightIcon />
                </IconButton>
                </Box>
                  
            </Paper>
            
        </Stack>
        
    </Stack>;
}
 
export default Hero;