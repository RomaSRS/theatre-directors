import React from "react";
import "./Select.css";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// class Select extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}

// 	toggleLang = (event) => {
// 		this.props.toggleLang(event)
// 	}

// 	render() {
// 		return (
// 			<div className="row-1">
// 			<select onChange={this.toggleLang}>
// 				<option value="en">EN</option>
// 				<option value="ru">RU</option>
// 				<option value="by">BY</option>
// 			</select>
// 			</div>
// 		)
// 	}
// }

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80
  },
  selectEmpty: {
    marginTop: theme.spacing(1)
  }
}));

function SelectLang(props) {
  const classes = useStyles();
  const [lang, setLang] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
		setLang(event.target.value);
		props.toggleLang(event);
		const elem = document.body.querySelector(".MuiInputBase-root");
		elem.blur()
	}

		return (
			<div className="row-1">
			<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Lang
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={lang}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value='en'>EN</MenuItem>
          <MenuItem value='ru'>RU</MenuItem>
          <MenuItem value='by'>BY</MenuItem>
        </Select>
      </FormControl>
			</div>
		)
  };



export default SelectLang;
