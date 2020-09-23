import React, {useState, useEffect} from 'react';
import {Button, Input, FormControl,InputLabel }  from '@material-ui/core';import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';import './App.css';
import Messege from './Messege';
import db from './firebase';
import FlipMove from 'react-flip-move';
import './App.css'
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));  
function App() {

  const [input, setInput] = useState('');
  const [messeges, setMessages]= useState([]);
  const classes = useStyles();
  const [userName , setUserName]= useState('')
 
  useEffect(()=>{
    db.collection('messages').orderBy('timestamp' , 'desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id ,messege: doc.data()}) ));
    })
  },[])
  useEffect(()=>{
     setUserName(prompt('please enter your name '))
  }, [])
   // send message function
   const sendMessage =(event)=>{
     event.preventDefault();
     db.collection('messages').add({
       message : input,
       username : userName,
       timestamp: firebase.firestore.FieldValue.serverTimestamp()
     })
     setMessages([...messeges, {username: userName , messege:input}]);
     setInput('');
   }

  return (
    <div className="App">
    
    <form className='app_form'>
    <FormControl className='app_formControl'>
    
    <Input className='app_messageInput' value={input} placeholder='Enter message' onChange={e => setInput(e.target.value)} />
    <IconButton className='app_iconButton'  disabled={!input}
        variant="contained"
        color="primary"
        className={classes.button}
        type='submit' onClick={sendMessage}>
      <SendIcon/>
    </IconButton>
    </FormControl>
   
   
  
      
    </form>
   
         {/* return the messeges*/}
     <FlipMove>
      {
          messeges.map(({id, messege}) => (
            <Messege key={id} userName={userName} messege={messege}/>
          
          ))
        }
     </FlipMove>

    </div>
  );
}

export default App;
