import React, {useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navbar from './components/Navbar'
import craftserverApi from './api/craftserver'
import AnnouncementDisplay from './components/AnnouncementDisplay'
import Announcement from './components/Announcement'
import GeneralRules from './components/GeneralRules'
import ManageUsers from './components/ManageUsers'
import AnnouncementEdit from './components/AnnouncementEdit'
import AddCategory from './components/AddCategory';
import Notification from "./components/Notification/Notification";

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
      <Navbar/>
    <Router>
      <div>

        <Switch>
        
        <Route path="/Notification" component={Notification} />
        <Route path="/manageusers" component={ManageUsers} />
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
