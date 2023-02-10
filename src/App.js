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
import { Home } from "./components/home/home";
import { Todo } from "./components/todo/todo";

function App() {
  //return <Home />;
  return <Todo />;
}

export default App;
