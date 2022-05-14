import { Box, Link, Typography } from '@mui/material';

export default function App() {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography sx={{
        width: 300,
        color: 'primary.main',
      }}>This is a test</Typography>
      <Typography sx={{
        width: 300,
        color: 'primary.secondary',
      }}>More info: </Typography>
      <Link href="https://mui.com/material-ui/react-grid/" rel="noopener">https://mui.com/material-ui/react-grid/</Link>
    </Box>
  );
}
