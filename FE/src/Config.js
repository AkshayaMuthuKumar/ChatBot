// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import AppointBtn from './Components/appointBtn';
import Doctorbtn from './Components/doctorbtn';
import Datebtn from './Components/datebtn';
import TimeBtn from './Components/timeBtn';
import Finalbtn from './Components/finalbtn';

const config = {

  initialMessages: [
    createChatBotMessage(`Welcome to Alagar Clinic!`),
    createChatBotMessage(`Do you need Doctor Appointment ?`, {
      widget: "YesorNo"
    })
  ], 
  botName: 'Alagar Clinic',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  state : {
    checker : null,
    userData: {
        doctorname: "",
        selectedDate: "",
        selectedTime:"",
        username: "",
        age : 0,
        mobileno: ""
    }
  },

  widgets: [
    {
        widgetName: "YesorNo",
        widgetFunc: (props) => <AppointBtn {...props}/>
    },
    {
      widgetName: "Doctor",
      widgetFunc: (props) => <Doctorbtn {...props}/>
    }, 
    {
      widgetName: "Date",
      widgetFunc: (props) => <Datebtn {...props}/>
    },
    {
      widgetName: "Time",
      widgetFunc: (props) => <TimeBtn {...props}/>
    },
    {
      widgetName: "Final",
      widgetFunc: (props) => <Finalbtn {...props}/>
    },
  ],
  
  
};

export default config;