import React from 'react'
import TarjetaSubasta from './TarjetaSubasta'

const CrearSubasta = () => {
    return (
        <>
            <TarjetaSubasta titulo={'Parsa'} descripcion={'El indio de tus sueños'} />
            <TarjetaSubasta titulo={'Parsa'} descripcion={'El indio de tus sueños'} precio={34} />
        </>
    )
}

export default CrearSubasta