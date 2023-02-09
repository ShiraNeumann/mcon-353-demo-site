import computer from "./images/computer1.jpg";
import javaLogo from "./images/Java.png";
import html from "./images/html.png";
import css from "./images/css.png";
import sql from "./images/sql.png";
import python from "./images/python.png";
import csharp from "./images/c#.png";
import "./App.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar, Button } from "@mui/material";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Avatar
          sx={{
            float: "right",
            bgcolor: "black",
            paddingTop: ".5em",
          }}
        >
          <a
            href="http://www.linkedin.com/in/shira-neumann-157aa5230/"
            target={"_blank"}
            rel="noopener"
          >
            <LinkedInIcon sx={{ color: "white", bgcolor: "black" }} />
          </a>
        </Avatar>
      </div>
      <header className="App-header">
        <div class="container">
          <img src={computer} />
        </div>

        <div class="overlay-text">
          <span class="coloredText">&lt;b&gt;</span>Hello
          <span class="coloredText">&lt;\b&gt;</span>
          <br />
          <div class="coloredText">I'm Shira</div>
          Computer Programmer
          <br />
          in the making.
        </div>
      </header>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minWidth: 200 }}>
            <CardMedia
              component="img"
              image={javaLogo}
              height="200"
              alt="java logo"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Java
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minWidth: 200 }}>
            <CardMedia
              component="img"
              image={python}
              height="200"
              width="150"
              alt="python logo"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Python
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minWidth: 200 }}>
            <CardMedia
              component="img"
              image={sql}
              height="200"
              alt="sql logo"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                SQL
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minWidth: 200 }}>
            <CardMedia
              component="img"
              image={html}
              height="200"
              alt="java logo"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                HTML
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minWidth: 200 }}>
            <CardMedia
              component="img"
              image={css}
              height="200"
              alt="java logo"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                CSS
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" sx={{ minWidth: 200 }}>
            <CardMedia
              component="img"
              image={csharp}
              height="200"
              alt="java logo"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                C#
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}

export default App;
