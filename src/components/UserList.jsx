import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export const UserList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/albums"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "lightpink", width: 950, marginTop: 2 }}>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>UserId</TableCell>
                  <TableCell>Id</TableCell>
                  <TableCell>Title</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => (
                  <TableRow>
                    <TableCell>{item.userId}</TableCell>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
