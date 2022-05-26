import { FC } from 'react'

interface TarjetaSubastaProps {
    titulo: string,
    descripcion: string
    precio?: number
}

const TarjetaSubasta: FC<TarjetaSubastaProps> = ({ titulo, descripcion, precio }) => {
    return (
        <>
            <h1>{titulo}</h1>
            <h3>{descripcion}</h3>
            {precio ? <h2>MUY BARRATO {precio}</h2> : null}
        </>
    )
}

export default TarjetaSubasta