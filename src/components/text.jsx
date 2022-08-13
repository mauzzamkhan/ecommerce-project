import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "white",
  },
}));

export default function Input1() {
  const classes = useStyles();
  const [email, setEmail] = useState();

  return (
    <div>
      <TextField
        id="email"
        label="Email"
        className={classes.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        InputProps={{
          className: classes.input,
        }}
      />
    </div>
  );
}
