import { Box, Typography } from '@mui/material'
import { FC } from 'react'

const Footer: FC = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", position: "absolute", bottom: 0, width: "100%", padding: "40px 20px", borderTop: "1px solid #6F6C90" }}>
            <Typography sx={{ color: "#6F6C90", fontStyle: "italic", alignSelf: "center" }}>Copyright &copy; {(new Date().getFullYear())} EGUAY | All Rights Reserved</Typography>
        </Box>
    )
}

export default Footer