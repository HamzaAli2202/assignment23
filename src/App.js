import React from "react";
import { UserList } from "./components/UserList";
import { Card, CardContent, TextField } from "@mui/material";

function App() {
  return (
    <Card align="center">
      <CardContent>
        <h1>USER LIST</h1>
        <TextField variant="outlined" label="Search" fullWidth />
        <UserList />
      </CardContent>
    </Card>
  );
}

export default App;
