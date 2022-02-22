import React from "react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import LoginPage from "./Login.js";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonTable from "./PersonTable.js";
// import AddPerson from "./AddPerson.js";

const App = ({ match }) => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  console.log("app");

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [user]);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const menuId = "search";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>{user?.attributes?.email}</MenuItem>
      <AmplifySignOut
        style={{
          "--amplify-primary-color": "transparent",
          "--amplify-primary-tint": "transparent",
          "--amplify-primary-shade": "transparent",
          "--amplify-primary-contrast": "black",
        }}
      />
    </Menu>
  );

  console.log("authState", authState);
  console.log("user", user);

  return (
    <div style={{ display: "flex" }}>
      {authState === AuthState.SignedIn && user ? (
        <div>
          <PersonTable user={user} />
          {/* <AddPerson /> */}
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            disabled={false}
            // color="#000000"
          >
            <AccountCircle />
          </IconButton>
          <div>{renderMenu}</div>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
};

export default App;
