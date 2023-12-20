import React, {useState, useEffect} from 'react'
import { Bell } from '../../assets/icons/IconsSVG'
import { NotificationList } from './NotificationList';
import { NewMessageList } from './NewMessageList';
import { ConnectRequestList } from './ConnectRequestList';
import { AcceptedConnectionRequest } from './AcceptedConnectionRequest';


export const NotificationBtn = () => {
  const [isNotificationListOpen, setNotificationListOpen] = useState(false);

  const toggleNotificationList = () => {
    setNotificationListOpen(!isNotificationListOpen);
  };

  return (
    <>
    <div className='relative flex flex-row items-center justify-center'>
    <button onClick={toggleNotificationList} ><Bell /></button>

    </div>
    
    {isNotificationListOpen &&
     <div className="absolute max-w-sm mx-auto mt-1 shadow-md bg-white  rounded-[1rem] mb-16 ">
     <NewMessageList />
     <ConnectRequestList />
     <AcceptedConnectionRequest />
   </div>

    }
    </>
  )
}
