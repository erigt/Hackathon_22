import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Btn from '../Button/Btn';
import styles from './search.module.css'

export default function Search() {
  return (
  <section className={styles.searchContainer}>
    <div className={styles.searchBar}>
      <TextField  fullWidth size="small" id="filled-basic" label="Buscar" variant="outlined" />
      <Btn color='secondary' text='Buscar'></Btn>
      <img src="/cil_animal.png" alt="" />
    </div>
      <div className={styles.checkboxContainer}>
        <FormControlLabel control={<Checkbox />} label="Servicios" />
        <FormControlLabel control={<Checkbox />} label="Productos" />
      </div>
    </section>
  )
}
