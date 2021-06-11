import Form from "./containers/Form";
import Messages from "./containers/Messages";


function Chat() {
  return (
    <div className="chat">
      <Messages />
      <Form />
    </div>
  );
}

export default Chat;
