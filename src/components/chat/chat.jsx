import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log(chats);
        console.log(data);
        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }
  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json()) //converts json to javascript
      .then((data) => {
        setMessages(data.Items);
      });
  }

  function postMessage() {
    //if there is a truthy value
    if (currentChat) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: "shira", // required CHANGE TO ALLOW USER TO CHOOSE
        text: inputMessage, // required
      };
      if (message.text) {
        fetch(
          "https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
            },
            body: JSON.stringify(message), //converts javascript to json for the api
          }
        );
      }
    } else {
      console.log("cannot post a message because current chat is null");
    }
    setInputMessage("");
  }

  function onMessageInput(event) {
    setInputMessage(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  return (
    <>
      <h1>Chat</h1>
      <div style={{ display: "flex" }}>
        <div>
          <h2>Chats</h2>
          {chats.map((chat) => (
            <div key={chat.id}>
              <button onClick={() => setChat(chat)}>{chat.name}</button>
            </div>
          ))}
        </div>
        <div>
          <h2>{currentChat && currentChat.name} Messages</h2>
          <div>
            <input onInput={onMessageInput} value={inputMessage} />
            <button onClick={() => postMessage()}>POST</button>
          </div>
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                {message.username}: {message.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
