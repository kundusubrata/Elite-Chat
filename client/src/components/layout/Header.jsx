import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { orange } from "../../constants/color";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const SearchDialog = lazy(() => import("../specific/Search"));

const NewGroupDialog = lazy(() => import("../specific/NewGroup"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));

const Header = () => {
  const navigate = useNavigate();

  const [ismobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    console.log("handleMobile");
    setIsMobile((prev) => !prev);
  };
  const openSearchdialog = () => {
    console.log("openSearchdialog");
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    console.log("openNewGroup");
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    console.log("openNotification");
    setIsNotification((prev) => !prev);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {
    console.log("logoutHandler");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            backgroundImage:
              "linear-gradient(135deg, rgb(37 75 103 / 73%), rgb(0 0 0 / 87%))",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Elite Chat
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              {/* <IconBtn
                title="Search"
                onClick={openSearchdialog}
                icon={<SearchIcon />}
              />

              <IconBtn
                title="New Group"
                onClick={openNewGroup}
                icon={<AddIcon />}
              />
              <IconBtn
                title={"Manage Group"}
                onclick={navigateToGroup}
                icon={<GroupIcon />}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />

              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              /> */}
              <Tooltip title={"Search"}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={openSearchdialog}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={"New Group"}>
                <IconButton color="inherit" size="large" onClick={openNewGroup}>
                  <AddIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={"Manage Group"}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={navigateToGroup}
                >
                  <GroupIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={"Notifications"}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={openNotification}
                >
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={"Logout"}>
                <IconButton
                  color="inherit"
                  size="large"
                  onClick={logoutHandler}
                >
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};

// const IconBtn = ({ title, onclick, icon }) => {
//   return (
//     <Tooltip title={title}>
//       <IconButton color="inherit" size="large" onClick={onclick}>
//         {icon}
//       </IconButton>
//     </Tooltip>
//   );
// };

export default Header;
