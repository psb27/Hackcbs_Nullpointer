import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Register.css'
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { LocalConvenienceStoreOutlined, PermMedia } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
function Register() {
  const [state, setstate] = useState("");
  console.log(state);
  return (
    <div classsName="Register">
      <Typography gutterBottom variant="h3" align="center">
       Crypto-State
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
            Secure Your Dreams
            </Typography>
  
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter City name"
                    label="City"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    type="number"
                    placeholder="Enter price"
                    value={state}
                    onChange={(e) => setstate(e.target.value)}
                    label="Price"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter Ethereum Address"
                    label="owner Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>{" "}
                <Grid item xs={12}>
                  <TextField
                    placeholder="Want to put on salle"
                    label="for salle"
                    multiline
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                    
                <label htmlFor="id" className="shareoptin">
              <PermMedia htmlColor="blue" className="Share__icon" />
              <span className="shareoptin__text">upload Property photo</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="id"
                accept=".png ,.jpeg,.jpg"
                // onChange={handleChange}
              />
            </label>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Enter place Address"
                    label="Place Address"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                   Register
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    
    </div>
  );
}

export default Register;
