import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import React from "react";
import "./App.css";

export default function AmplifyLogin() {
  const formFields = [
    {
      type: "email",
      placeholder: "Email",
      required: true,
      label: "",
      inputProps: {
        autocomplete: "off",
      },
    },
    {
      type: "phone_number",
      placeholder: "Mobile",
      required: true,
      label: "",
      inputProps: {
        autocomplete: "off",
      },
    },
    {
      type: "password",
      required: true,
      placeholder: "Password",
      label: "",
      inputProps: {
        autocomplete: "off",
      },
    },
    {
      type: "custom:organisation_id",
      label: "Surgery Code",
      placeholder: "Enter your registered Surgery Code",
      required: true,
      inputProps: {
        autocomplete: "off",
      },
    },
  ];

  const signInFields = [
    {
      type: "email",
      placeholder: "Email",
      required: true,
      label: "",
    },
    {
      type: "password",
      placeholder: "Password",
      required: true,
      label: "",
    },
  ];

  return (
    <React.Fragment>
      <AmplifyAuthenticator usernameAlias="email">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={formFields}
        />
        <AmplifySignIn
          formFields={signInFields}
          slot="sign-in"
          headerText="Log in"
          usernameAlias="email"
        />
      </AmplifyAuthenticator>
    </React.Fragment>
  );
}
