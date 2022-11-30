import React, { useEffect, useRef, useState } from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {db} from './firebase';                                
import { addDoc, collection } from 'firebase/firestore';

function Feed() {
  const [posts, setPosts] = useState([]);

  const inputRef = useRef(null);

  

    

  useEffect(() => {
    // check db for changes using .OnSnapshot method and update state
    // db.collection('posts').onSnapshot(snapshot => (
    //   setPosts(snapshot.docs.map(doc => (
    //     {
    //       id: doc.id,
    //       data: doc.data(),
    //     }
    //   )))
    // ))
  

  },[])

  const dbRef = collection(db, 'posts')

  const sendPost = async(e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    console.log(inputRef.current.value);
    inputRef.current.value = '';
  
      await addDoc(dbRef, {
      name: 'Tokyo',
      description: 'Japan',
      message: inputRef.current.value
      }).then(
        (docRef) => {
          // console.log('Added document with ID: ', docRef.id);

        }
      ).catch((error) =>{
        console.log('Error adding document: ', error.msg);
      } );
  

      
      
    
    

    // add post to db
    // db.collection('posts').add({
    //   name: 'John Doe',
    //   description: 'This is a test',
    //   message: 'This is a message',
    // })

  

  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input ref={inputRef} type="text" />
            <button type='Submit' onClick={sendPost}> Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon } title="Event" color="#C0CBCD" />
          
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Post */}
      {/* map through the set posts array */}
      {posts?.map((post) => (
        <Post name={post?.name} description={post?.description} message={post?.message} />

      ))}
    </div>
  )
}

export default Feed