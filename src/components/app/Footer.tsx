import { Box, Link, Typography } from '@mui/material'
import { FC } from 'react'

const Footer: FC = () => {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", padding: "40px 20px", borderTop: "1px solid #6F6C90" }}>
                <Typography sx={{ color: "#6F6C90", fontStyle: "italic", alignSelf: "center", paddingRight: 10 }}>Copyright &copy; {(new Date().getFullYear())} EGUAY | All Rights Reserved</Typography>
                <Typography sx={{ color: "#6F6C90", fontStyle: "italic", alignSelf: "center", paddingLeft: 10, textDecoration: "none" }}><a target="_blank" href='https://www.subastasprocuradores.com/faq'>FAQ</a></Typography>
            </Box>

        </>
    )
}

export default Footer