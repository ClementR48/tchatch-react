import Settings from "./containers/Settings";
import Form from "./containers/Form";
import Messages from "./containers/Messages";


function Chat() {
  return (
    <div className="chat">
      <Messages />
      <Form />
      <Settings />
    </div>
  );
}

export default Chat; 
