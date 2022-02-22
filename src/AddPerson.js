import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Button } from "@material-ui/core";
import { createPerson } from "./graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

const useStyle = makeStyles((theme) => ({}));

export default function AddPerson(props) {
  const classes = useStyle();

  const handleAddPerson = async () => {
    try {
      await API.graphql(
        graphqlOperation(createPerson, {
          name: "Shyam",
          email: "sachin.shandilya@medloop.co",
          age: 20,
          salary: 1000,
          organisation_id: "A123",
        })
      );
      alert("added patient successfully");
    } catch (err) {
      alert("error while adding patient");
    }
  };
  return (
    <React.Fragment>
      <Button onClick={handleAddPerson}>Add Person</Button>
    </React.Fragment>
  );
}
