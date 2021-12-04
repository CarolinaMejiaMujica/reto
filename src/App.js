import "./App.css";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { makeStyles } from "@material-ui/core/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const departamentos = [
  "Todos",
  "Amazonas",
  "Áncash",
  "Apurímac",
  "Arequipa",
  "Ayacucho",
  "Cajamarca",
  "Callao",
  "Cusco",
  "Huancavelica",
  "Huánuco",
  "Ica",
  "Junín",
  "La Libertad",
  "Lambayeque",
  "Lima",
  "Loreto",
  "Madre de Dios",
  "Moquegua",
  "Pasco",
  "Piura",
  "Puno",
  "San Martín",
  "Tacna",
  "Tumbes",
  "Ucayali",
];
const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    flexDirection: "center",
    fontWeight: 600,
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    paddingTop: "20px",
    width: "95%",
  },
}));
function App() {
  const classes = useStyles();
  const [seleccionados, setSeleccionados] = React.useState(departamentos);

  return (
    <div>
      <div className={classes.title}>Reto Semana 4 - IBM</div>
      <Autocomplete
        value={seleccionados}
        id="departamentos"
        multiple
        options={departamentos}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        onChange={(event, newValue) => {
          if (newValue.includes("Todos")) {
            setSeleccionados(departamentos);
          } else if (newValue.length === 0) {
            setSeleccionados([]);
          } else {
            setSeleccionados(newValue);
          }
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: "90%", paddingLeft: 20, paddingRight: 20 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Departamentos"
            placeholder="Departamento"
          />
        )}
      />
    </div>
  );
}
export default App;
