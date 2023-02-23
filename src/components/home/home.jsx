import computer from "../../images/computer1.jpg";
import javaLogo from "../../images/Java.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import sql from "../../images/sql.png";
import python from "../../images/python.png";
import csharp from "../../images/c#.png";
import "../../App.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./home.css";

export const Home = () => {
  return (
    <div className="App">
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
};
