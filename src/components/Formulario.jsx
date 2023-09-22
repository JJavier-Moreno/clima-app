import useClima from '../hooks/useClima'
import { useState } from 'react';

const Formulario = () => {

    const { busqueda, datosBusqueda, consultarClima } = useClima();
    const { ciudad, pais } = busqueda;

    const [alerta, setAlerta] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return;
        }

        setAlerta('');

        consultarClima(busqueda);

    }

    return (
        <div className='contenedor'>
            {alerta && <p>{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className='campo'>
                    <label htmlFor='ciudad'>Ciudad</label>
                    <input
                        type='text'
                        id='ciudad'
                        name='ciudad'
                        onChange={datosBusqueda} //El e se pasa directamente a datosBusqueda del provider
                        value={ciudad}
                    />
                    <label htmlFor='pais'>Pais</label>
                    <select
                        id='pais'
                        name='pais'
                        onChange={datosBusqueda}
                        value={pais}>
                        <option value="">---Seleccione su Pais---</option>
                        <option value="US">Estados Unidos</option>
                        <option value="ES">España</option>
                        <option value="MX">Mexico</option>
                        <option value="AL">Alemania</option>
                        <option value="AR">Argentina</option>
                    </select>

                </div>

                <input
                    type='submit'
                    value="Consultar Clima" />
            </form>
        </div>
    )
}

export default Formulario