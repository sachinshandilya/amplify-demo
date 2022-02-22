import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AmplifyLogin from "./AmplifyLogin";
import LoginBG from "./login_background.jpg";

const useStyle = makeStyles((theme) => ({
  root: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${LoginBG})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

export default function LoginPage(props) {
  const classes = useStyle();
  return (
    <React.Fragment>
      <div data-cy="test" className={classes.root}>
        <AmplifyLogin></AmplifyLogin>
      </div>
    </React.Fragment>
  );
}
