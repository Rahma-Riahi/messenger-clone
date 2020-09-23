import React,{forwardRef} from 'react'
import {Card, CardContent, Typography } from '@material-ui/core'
import './messege.css'
const Messege = forwardRef( ({messege, userName}, ref) => {
 
    const isUser = userName === messege.username;
      console.log('user name' ,messege.timestamp)
    return (
             <div ref={ref} className= {`messege ${isUser  && 'message_user' }`}>
                  
                  <Card className= {isUser? 'message_userCard' : 'message_guestCard'}>
                    <CardContent>
                        <Typography color='white' variant='h5' component='h2'>
                       {!isUser && `${messege.username || 'Unknown User'}:`}  {messege.message} 
                
                        </Typography>
                        
                    </CardContent> 
                </Card>
             </div>
           
           
        
    )
})

export default Messege
