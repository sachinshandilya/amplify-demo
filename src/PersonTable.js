import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { listEmployees } from "./graphql/queries";
import { onCreatePerson } from "./graphql/subscriptions";

import { API, Auth, graphqlOperation } from "aws-amplify";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function PersonTable(props) {
  const classes = useStyles();
  const { user } = props;
  const [rows, setRows] = React.useState([]);
  const [refreshRows, setRefreshRows] = React.useState(false);
  console.log("PersonTable");

  console.log(user.attributes["custom:organisation_id"]);

  React.useEffect(() => {
    console.log("user ", user);
    const getDetails = async () => {
      if (!user) return;
      console.log("*****Call****");
      const result = await API.graphql(
        graphqlOperation(listEmployees, {
          filter: {
            organisation_id: { eq: user.attributes["custom:organisation_id"] },
          },
        })
      );
      console.log("result ", result);

      setRows(result.listEmployees.items);
    };
    getDetails();
  }, [user, refreshRows]);

  //   React.useEffect(() => {
  //     const subscribe = () => {
  //       if (user) {
  //         const subscription = API.graphql({
  //           query: onCreatePerson,
  //           variables: {
  //             organisation_id: organisation.id,
  //           },
  //         }).subscribe({
  //           next: ({ provider, value }) => {
  //             setRefreshRows(Math.random());
  //             //enable this while demoing subscriptions
  //             alert("Data has been updated");
  //           },
  //         });
  //         return () => subscription.unsubscribe();
  //       }
  //     };
  //     subscribe();
  //   }, [user]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Salary</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.salary}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
