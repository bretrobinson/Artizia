import React, {useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import craftserverApi from './api/craftserver'
import AnnouncementDisplay from './components/AnnouncementDisplay'
import Announcement from './components/Announcement'
import GeneralRules from './components/GeneralRules'
import AnnouncementEdit from './components/AnnouncementEdit'
import AddCategory from './components/AddCategory';

function App() {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [expiredDate, setExpiredDate] = useState(new Date())
  const [annnouncementData, setAnnouncementData] = useState([])
  const [category, setCategory] = useState();

  useEffect (()=>{
  loadAnnouncement()
  }, [])

  const onSubmitmessage = async ({title, message, expiredDate})=>{
    if (!title|| !message ){
      alert('Please enter Title , Message and Expired Date')
    } else {
      try{
        const response = await craftserverApi.post('/announcement', {title, message, expiredDate})
        await console.log(response.data)
        await loadAnnouncement()
        // await setMessage('')
      } catch (err) {
        console.log(err)
      }
    }
  }


const loadAnnouncement = async () =>{
try{
    const response = await craftserverApi.get('/announcement')
    
    setAnnouncementData(response.data)
} catch (err) {
    console.log(err)
}
}
const onUpdateMessage = async (idMessage, message) =>{
  
if(message.length<2){
  alert('Please Enter Message to edit')
} else{
await craftserverApi.post('/announcement/' + idMessage ,{ message})
  loadAnnouncement()
}

}


  const onDeleteMessage = async (idMessage) => {
    await craftserverApi.delete('/announcement/' + idMessage)
    loadAnnouncement()
  }

  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/message">Create Mesaage</Link>
            </li>
            <li>
              <Link to="/rules">Rules</Link>
            </li>
            <li>
              <Link to="/addCategory">Add Category</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/message">
            <Announcement onChangeTitle={setTitle}
              onChangeExpiredDate={setExpiredDate}
              onChangeMessage={setMessage} 
              onSubmitmessage={()=>onSubmitmessage({title, message, expiredDate})}
              title={title} message={message} expiredDate={expiredDate}
            />
          </Route>
          <Route path="/edit/:idAnnouncements">
          <AnnouncementEditPage onChangeTitle={setTitle}
      onChangeExpiredDate={setExpiredDate}
      onChangeMessage={setMessage}
      onUpdateMessage={onUpdateMessage}
      title={title} message={message} expiredDate={expiredDate}
       
       />
          </Route>
          <Route path="/rules">
            <GeneralRules />
          </Route>
          <Route path="/addCategory" component={AddCategory} />
          <Route path="/">
          <AnnouncementDisplay annnouncementData={annnouncementData}
         onDeleteMessage={onDeleteMessage}
        />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}
const AnnouncementEditPage =({onChangeTitle, onChangeExpiredDate, onChangeMessage, onUpdateMessage, message, title})=>{
 
let {idAnnouncements} = useParams()
// console.log(idAnnouncements)
return <AnnouncementEdit idAnnouncements={idAnnouncements} 
onChangeTitle={onChangeTitle} 
onChangeExpiredDate={onChangeExpiredDate} 
onChangeMessage={onChangeMessage}
onUpdateMessage={onUpdateMessage}
title={title} message={message} />
}

export default App;
