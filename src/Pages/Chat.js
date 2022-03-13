import "../Components/Main.css";

function Chat() {
  return (
    <div>
      <h2> This is chat</h2>
      <div id="wrapper">
        <div id="menu">
          <p className="welcome">
            Welcome, <b></b>
          </p>
          <p className="logout">
            <a id="exit" href="/chat">
              Exit Chat
            </a>
          </p>
        </div>
        <div id="chatbox"></div>
        <form name="message" action="">
          <input name="usermsg" type="text" id="usermsg" />
          <input name="submitmsg" type="submit" id="submitmsg" value="Send" />
        </form>
      </div>
    </div>
  );
}
export default Chat;
