import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Avatar from "@material-ui/core/Avatar";
import FormHelperText from "@material-ui/core/FormHelperText";
import List from "@material-ui/core/List";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Fab from "@material-ui/core/Fab";
import Snackbar from "@material-ui/core/Snackbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Collapse from "@material-ui/core/Collapse";
import Tooltip from "@material-ui/core/Tooltip";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepContent from "@material-ui/core/StepContent";
import StepLabel from "@material-ui/core/StepLabel";
import Input from "@material-ui/core/Input";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Slide from "@material-ui/core/Slide";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const CustomTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4e3505",
      },
    },
  },
})(TextField);

export {
  InputLabel,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Slide,
  Badge,
  Step,
  Input,
  Stepper,
  StepLabel,
  StepButton,
  StepContent,
  Button,
  Box,
  FormGroup,
  FormLabel,
  Menu,
  MenuItem,
  CustomTextField,
  Collapse,
  Tooltip,
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  TextField,
  Container,
  Typography,
  Snackbar,
  Fab,
  Paper,
  Avatar,
  Divider,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
  IconButton,
  List,
  ListItem,
  makeStyles,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  CircularProgress,
  AppBar,
  Toolbar,
  useScrollTrigger,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
};
