import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import logo from "./../images/logo.png";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
function NavbarComponent(props) {
  const { user, logout, isLoggedIn, classes, history } = props;
  const handleBack = props => {
    console.log(props);
    props.history.push("/");
  };
  return (
    <AppBar position="sticky">
      <div className="nav-bar">
        <KeyboardBackspaceIcon
          className="power-icon"
          fontSize="large"
          onClick={() => handleBack(props)}
        />
        {isLoggedIn ? (
          <>
            <Link className="nav-links">
              <PowerSettingsNewIcon fontSize="large" className="power-icon" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <h4>Login</h4>
            </Link>
            <Link to="/signup">
              <h4>Sign Up</h4>
            </Link>
          </>
        )}
      </div>
    </AppBar>
  );
}

export default withAuth(NavbarComponent);
