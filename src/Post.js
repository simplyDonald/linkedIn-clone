  import { forwardRef } from 'react';
import { Avatar } from '@mui/material';
import './Post.css'
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PublicIcon from '@mui/icons-material/Public';
import ReactTimeago from 'react-timeago'



const Post = forwardRef(({ name, description, message, photoUrl, timestamp }, ref) => {

  

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}> 
        {/*Avatar renders the props.children if src is not given/trut */}
          {name[0]}
        </Avatar>
        
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className='post__extras'>
            <p>{
              // <ReactTimeAgo date={new Date()} locale="en-US"/>\
              <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/>
            
            }</p>  
            <FiberManualRecordIcon className="post__icon" /> <PublicIcon className="post__public"/> </div>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  )
})

export default Post