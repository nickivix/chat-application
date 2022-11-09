import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Context } from "components/Context/Context";

import Login from "screens/Login/Login";
import Home from "screens/Home/Home";
import Channel from "screens/Channel/Channel";
import Settings from "screens/Settings/Settings";

export default function Router() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState({
    firstname: "Bruce",
    lastname: "Wayne",
  });
  const [messages, setMessages] = useState([]);
  const [channelName, setChannelName] = useState("");

  const changeLoginStatus = () => {
    setLoggedIn(!loggedIn);
  };

  const changeFirstname = (event) => {
    let { firstname, lastname } = username;
    firstname = event.target.value;
    setUsername({ firstname: firstname, lastname: lastname });
  };

  const changeLastname = (event) => {
    let { firstname, lastname } = username;
    lastname = event.target.value;
    setUsername({ firstname: firstname, lastname: lastname });
  };

  const changeMessages = (value) => {
    setMessages(value);
  };

  const changeChannelName = (value) => {
    setChannelName(value);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            loggedIn ? (
              <Context.Provider value={{ channelName, changeChannelName }}>
                <Home />
              </Context.Provider>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path="/login"
          render={() =>
            !loggedIn ? (
              <Login changeLoginStatus={changeLoginStatus} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path={"/channel/:channelName"}
          render={() =>
            loggedIn ? (
              <Channel
                changeLoginStatus={changeLoginStatus}
                changeMessages={changeMessages}
                changeChannelName={changeChannelName}
                username={username}
                messages={messages}
                channelName={channelName}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route
          exact
          path={"/settings"}
          render={() =>
            loggedIn ? (
              <Settings
                changeLoginStatus={changeLoginStatus}
                changeFirstname={changeFirstname}
                changeLastname={changeLastname}
                username={username}
              />
            ) : (
              <Redirect to="/" />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}
