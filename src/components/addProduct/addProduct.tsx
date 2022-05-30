import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Container, Paper , Divider, Box, FormControl, InputLabel, Input, InputAdornment, Stack, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import EuroIcon from '@mui/icons-material/Euro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
const currencies = [
    {
        value: 'Jugeutes Adultos',
        label: 'Jugeutes Adultos',
    },
    {
        value: 'Weed',
        label: '*',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];


export default function AddressForm() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
        <Container component="main"  sx={{mb: 4}}>
            <Paper variant="outlined" sx={{my: {xs: 3, md: 6},border: 1,borderColor: 'primary.main' ,p: {xs: 2, md: 3}}}>


                <Typography variant="h6" gutterBottom>

                </Typography><Grid container spacing={3}>
                <Grid item xs={12}  sx={{ ma : 4 }}>
                    <TextField
                        required
                        id="Titulo"
                        name="Titulo"
                        label="Titulo"
                        fullWidth
                        margin="normal"
                        autoComplete="given-name"
                        variant="filled"/>

                </Grid>
                <Grid item xs={12}  sx={{ ma : 4 }} >
                    <TextField
                        required
                        id="URL"
                        name="URL"
                        label="URL de la foto"
                        fullWidth
                        margin="normal"
                        autoComplete="family-name"
                        variant="filled"/>
                </Grid>
                <Grid item xs={12} sm={7}  >
                    <TextField
                        id="filled-select-currency-native"
                        select
                        value={currency}
                        onChange={handleChange}
                        fullWidth
                        inputProps={{min: 0}}
                        margin="normal"
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Selecciona la categoria deseada"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id="Descripcion"
                        name="Descripcion"
                        label="Descripcion"
                        fullWidth
                        multiline
                        rows={3}
                        margin="normal"
                        autoComplete="shipping address-line1"
                        variant="filled"/>

                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ '& > :not(style)': { m: 1 } }}>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Precio inicial"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EuroIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="filled"
                        />

                    </Box>
                </Grid>
                <Grid item xs={12}   >
                    <Stack spacing={5}>
                    <Grid container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="flex-end"
                          gap ={4}
                    >
                    <FormControlLabel
                        sx={{ m: -1  }}
                        control={<Checkbox color="primary" name="PrecioDeCompra" value="yes"/>}
                        label="Precio de compra directa"

                    />
                        <TextField
                            sx={{ m: 1  }}
                            id="input-with-icon-textfield"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EuroIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />


                    </Grid>

                    <Grid container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="flex-end"
                          margin="normal"
                          gap ={4}
                          sx={{ m: 0  }}
                    >
                        <FormControlLabel
                            sx={{ m: -1  }}
                            control={<Checkbox color="primary" name="PrecioDeCompra" value="yes"/>}
                            label="La puja se la lleva el mejor postor el "

                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}

                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                
                            />
                        </LocalizationProvider>


                    </Grid>
                        <Grid >
                        <Button variant="contained">Contained</Button>
                        </Grid>
                    </Stack>
                    </Grid>

            </Grid>


            </Paper>
        </Container>


    );
}