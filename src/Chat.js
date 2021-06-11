import Form from "./components/Form";
import Messages from "./components/Messages";


function Chat() {
  return (
    <div className="chat">
      <Messages />
      <Form />
    </div>
  );
}

export default Chat;
