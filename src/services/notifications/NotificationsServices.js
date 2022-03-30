import { createContext, useState, useContext } from "react"
import { Icon } from 'react-icons-kit'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import {warning} from 'react-icons-kit/icomoon/warning'
import {notification} from 'react-icons-kit/icomoon/notification'


const Notification = ({ message='Test', severity}) => {
    const notificationStyles = {
        position: 'fixed',
        bottom: '3%',
        right: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        backgroundColor: severity === 'success'? '#00b347' : ( severity === 'warning'? 'yellow': 'red' ),
        borderRadius: '10px',
        padding: '10px 20px 10px 20px'
    }

    const iconStyles = {
        paddingRight: '10px',
        paddingBottom: '5px'
    }
    
    if(message === ''){
        return null
    }

    return (
        <div style={notificationStyles}>  
            <div style={iconStyles}>
                {severity === 'success'? <Icon icon={checkmark}/> : (severity === 'warning'? <Icon icon={warning}/> : <Icon icon={notification}/>) }
            </div> 
            {message}
        </div>
    )
}

const NotificationContext = createContext();

export const NotificationsServicesProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');

    const setNotification = (severity, message) => {
        setMessage(message);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('')
        }, 5000);
    }

    return(
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} severity={severity} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationServices = () => {
    return useContext(NotificationContext);
}
