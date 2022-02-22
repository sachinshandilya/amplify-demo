import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Button } from "@material-ui/core";
import { createEmployee } from "./graphql/mutations";
import client from "./graphqlClient";
const gql = require("graphql-tag");
const useStyle = makeStyles((theme) => ({}));

export default function AddPerson(props) {
  const classes = useStyle();
  const { user } = props;

  const handleAddPerson = async () => {
    console.log("in handleAddPerson");
    try {
      const result = await client.mutate({
        mutation: gql.gql(createEmployee),
        variables: {
          input: {
            salary: 1000,
            email: `vinod.iyer+${Date.now()}@gmail.com`,
            name: `Vinod ${Date.now().toString().substring(10)} ${
              user.attributes["custom:organisation_id"]
            }`,
            age: "30",
            organisation_id: user.attributes["custom:organisation_id"],
          },
        },
      });
      console.log("HandleAddPerson results", result);
      alert("added patient successfully");
    } catch (err) {
      console.error("Error ", err);
      alert("error while adding patient");
    }
  };
  return (
    <React.Fragment>
      <Button onClick={handleAddPerson}>Add Employee</Button>
    </React.Fragment>
  );
}
