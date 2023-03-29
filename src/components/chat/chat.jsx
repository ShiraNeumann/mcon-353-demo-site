import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import {
  Drawer,
  InputAdornment,
  List,
  ListItem,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";
import "./chat.css";
import SendIcon from "@mui/icons-material/Send";
import MessageIcon from "@mui/icons-material/Message";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TextField from "@mui/material/TextField";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [newChat, setNewchat] = useState("");
  const [username, setUsername] = useState(null);

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function addChat() {
    const chat = {
      name: newChat,
    };
    if (chat.name) {
      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(chat),
      })
        .then((response) => response.json())
        .then((data) => {
          setChats([...chats, data.Item]);
        });
    }

    setNewchat("");
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
        username: username, // required
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? "simple-popover" : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <div id="sidebar">
          <IconButton
            onClick={handleDrawerOpen}
            open={open}
            sx={{ ...(open && { display: "none" }) }}
            color="secondary"
          >
            <MessageIcon />
          </IconButton>
        </div>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <br />
          <br />
          <br />

          <div className="drawerHeader">
            <IconButton
              aria-describedby={id}
              onClick={handleClick}
              color="secondary"
            >
              <AddCommentIcon id="newChat" />
            </IconButton>
            <Popover
              id={id}
              open={openPopover}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <TextField
                variant="standard"
                label="New Chat"
                color="secondary"
                placeholder="Enter chat name"
                onChange={(event) => setNewchat(event.target.value)}
                value={newChat}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    addChat();
                  }
                }}
                sx={{ margin: "5%" }}
              />
            </Popover>

            <h3 id="heading">Chats</h3>
            <IconButton onClick={handleDrawerClose} color="secondary">
              <ChevronLeftIcon />
            </IconButton>
          </div>

          <List>
            {chats
              .filter((chat) => chat.name)
              .sort((a, b) => a.name.localeCompare(b.name)) // sort alphabetically
              .map((chat) => (
                <ListItem key={chat.id} class="channel">
                  <div onClick={() => setChat(chat)}>{chat.name}</div>
                </ListItem>
              ))}
          </List>
        </Drawer>
      </Box>

      <div>
        <div
          style={{
            width: "50%",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <br />
          <div style={{ borderBottom: "3px solid black" }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 8">
                <Typography variant="h2">
                  {currentChat && currentChat.name ? currentChat.name : "Chat"}
                </Typography>
              </Box>
              <Box gridColumn="span 4" alignSelf={"end"}>
                <TextField
                  id="input"
                  label="Username"
                  placeholder="Enter user name"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  color="secondary"
                />
              </Box>
            </Box>
          </div>
          <div>
            <div id="chat">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    class={
                      username === message.username ? "myusername" : "username"
                    }
                  >
                    {message.username}
                  </div>
                  <div
                    class={
                      username === message.username ? "mymessage" : "message"
                    }
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <br />
            <div id="typeMessage">
              <TextField
                fullWidth
                multiline
                disabled={!username || !currentChat}
                color="secondary"
                onInput={onMessageInput}
                value={inputMessage}
                placeholder={
                  username
                    ? "Type Message"
                    : "Choose a chat and enter a username to send a message"
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    postMessage();
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      onClick={() => postMessage()}
                    >
                      <IconButton
                        color="secondary"
                        aria-label="send message"
                        ripple="true"
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
