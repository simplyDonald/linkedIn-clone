import React, { useEffect, useRef, useState } from 'react';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';  
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
import { Avatar } from '@mui/material';
// V9 firebase                               // 
// import { addDoc, collection } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  const inputRef = useRef(null);

  const user = useSelector(selectUser)

  

    

  useEffect(() => {
    // check db for changes using .OnSnapshot method and update state
    db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))

  },[])

  // const dbRef = collection(db, 'posts')

  const sendPost = async(e) => {
    e.preventDefault();
        // add post to db V8 firebase
        db.collection('posts').add({
          name: user.displayName,
          description: user.email,
          message: inputRef.current.value,
          photoUrl: user.photoUrl || "",
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        inputRef.current.value = '';
  

  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__top">
          <Avatar src={user.photoUrl} sx={{ width: 56, height: 56 }}> 
          {/*Avatar renders the props.children if src is not given/truthy */}
            {user.displayName[0]}
          </Avatar>
          <div className="feed__input">
            <form>
              <input ref={inputRef} type="text" />
              <button type='Submit' onClick={sendPost}> Send</button>
            </form>
          </div>

        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon } title="Event" color="#C0CBCD" />
          
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Post */}
      <FlipMove>

      {/* map through the state's posts array */}
      {posts?.map(({id, data:{name, description,message, photoUrl,timestamp}}) => (
        
        <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} timestamp={timestamp} />

      ))}
      </FlipMove>
    </div>
  )
}

export default Feed