import React from "react";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import Header from "./Header";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/sampleData";
import { useParams } from "react-router-dom";
import Profile from "../specific/Profile";
import { leftDrawer } from "../../constants/color";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    const params = useParams();

    const chatId = params.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log("Delete Chat", _id, groupChat);
    };
    return (
      <>
        <Title title="Elite Chat" />
        <Header />
        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" },backgroundImage: leftDrawer }}
            height={"100%"}
            
          >
            {/* First Column */}
            <ChatList
              chats={sampleChats}
              chatId={chatId}
              // newMessagesAlert={[
              //   {
              //     chatId,
              //     count: 4,
              //   },
              // ]}
              // onlineUsers={["1", "2"]}
              handleDeleteChat={handleDeleteChat}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} min-height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              backgroundImage:
                "linear-gradient(135deg, rgb(152 236 0 / 73%), rgb(0 0 0 / 87%))",
            }}
          >
            {/* Third Column */}
            <Profile />
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
