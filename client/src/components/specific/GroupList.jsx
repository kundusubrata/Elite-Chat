import React from "react";
import { Stack, Typography } from "@mui/material";
import GroupListItem from "../shared/GroupListItem";
import { leftDrawer } from "../../constants/color";

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w} overflow={"auto"} sx={{ backgroundImage: leftDrawer, height:"100vh" }}>
      {myGroups.length > 0 ? (
        myGroups.map((group) => (
          <GroupListItem group={group} chatId={chatId} key={group._id} />
        ))
      ) : (
        <Typography textAlign={"center"} padding="1rem">
          No groups
        </Typography>
      )}
    </Stack>
  );
};

export default GroupList;
