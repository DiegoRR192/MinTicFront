import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const dataProductos = [
    { id: 101, descripcion: "Sofacama", valor: 1000000, estado: "Disponible" },
    { id: 102, descripcion: "Silla reclinable", valor: 2000000, estado: " No disponible" },
    { id: 103, descripcion: "Mueble sala", valor: 350000, estado: " Disponible" }
]


const RegisProduc = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [muebles, setMuebles] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Mueble');
    const [colorBoton, setColorBoton] = useState('indigo');
    const [mostrarEditar, setMostrarEditar] = useState(true);


    useEffect(() => {
        //obtener lista de vehículos desde el backend
        setMuebles(dataProductos);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Crear Nuevo Mueble');
            setColorBoton('red');
        } else {
            setTextoBoton('Mostrar Todos los Muebles');
            setColorBoton('red');
        }
    }, [mostrarTabla]);

    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
                <h2 className='text-3xl font-extrabold text-gray-900'>
                    Página de administración de productos
                </h2>
                <div className="flex text-center">
                    <div className=" pl-20 pr-20 pt-10 pb-10 ">
                        <form className='flex flex-col'>
                            <h4 className='font-bold text-grey-900 justify-center'>Buscar producto</h4>
                            <div clasName="flex items-center justify-center gap-3">

                                <div class="p-5">
                                    <div class="bg-white flex items-center rounded-full shadow-xl">
                                        <input class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="'ID Producto o Descripcion'" />

                                        <div class="p-4">
                                            <button class="bg-red-700 text-white rounded-full p-2 font-bold hover:bg-red-800 focus:outline-none w-12 h-12 flex items-center justify-center">
                                                Buscar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <button
                    onClick={() => {
                        setMostrarTabla(!mostrarTabla);
                    }}
                    className={`text-white font-bold bg-${colorBoton}-800 p-2 m-5 w-29 hover:bg-red-900 rounded self-end`}
                >
                    {textoBoton}
                </button>
            </div>
            {
                mostrarTabla ? (
                    <TablaMuebles listaMuebles={muebles} />
                ) : (
                    <FormularioCreacionMuebles
                        setMostrarTabla={setMostrarTabla}
                        listaMuebles={muebles}
                        setMuebles={setMuebles}
                    />
                )
            }

            {
                mostrarEditar ? (
                    <div/>
                ) : (
                    <FormularioModificacionMuebles
                        setMostrarTabla={setMostrarTabla}
                        listaMuebles={muebles}
                        setMuebles={setMuebles}
                    />
                )
            }
            <ToastContainer position='bottom-center' autoClose={5000} />
        </div >
    )
}

const TablaMuebles = ({ listaMuebles,verEditar, mostrarEditar }, editRow = { editRow }) => {
   
    useEffect(() => {
        console.log('este es el listado de muebles en el componente de tabla', listaMuebles);
    }, [listaMuebles]);
    return (
        <div className='flex flex-col items-center justify-center '>
            <h2 className='text-2xl font-extrabold text-gray-800'>Todos los muebles</h2>
            <table className="mt-10  ">
                <thead>
                    <tr>
                        <th className="border border-gray-500 bg-red-800 px-4 p-2 text-white">Identificador </th>
                        <th className="border border-gray-500 bg-red-800 px-4 p-2 text-white">Descricion</th>
                        <th className="border border-gray-500 bg-red-800 px-4 p-2 text-white">Valor</th>
                        <th className="border border-gray-500 bg-red-800 px-4 p-2 text-white">Estado</th>
                        <th className="border border-gray-500 bg-red-800 px-4 p-2 text-white">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {listaMuebles.map((producto) => {
                        return (
                            <tr>
                                <td className="border border-gray-500 bg-gray-200 px-6 p-2">{producto.id}</td>
                                <td className="border border-gray-500 bg-gray-200 px-6 p-2">{producto.descripcion}</td>
                                <td className="border border-gray-500 bg-gray-200 px-6 p-2">{producto.valor}</td>
                                <td className="border border-gray-500 bg-gray-200 px-6 p-2">{producto.estado}</td>
                                <td className="border border-gray-500 bg-gray-200 px-6 p-2"><button onClick={() => {
                                    verEditar(!mostrarEditar);
                                }}
                                    className="border-2 border-red-700 hover:border-red-900 rounded-full p-2">
                                    Editar</button>
                                </td>

                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    );
};

const FormularioCreacionMuebles = ({ setMostrarTabla, listaMuebles, setMuebles }) => {
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoMueble = {};
        fd.forEach((value, key) => {
            nuevoMueble[key] = value;
        });

        setMostrarTabla(true);
        setMuebles([...listaMuebles, nuevoMueble]);
        // identificar el caso de éxito y mostrar un toast de éxito
        toast.success('Mueble agregado con éxito');
        // identificar el caso de error y mostrar un toast de error
        //toast.error('Error creando un mueble');
    };

    return (
        <div>
            <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo mueble</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <label className='flex flex-col' htmlFor='id'>
                    Identificador del mueble
                    <input
                        name='id'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='number'
                        placeholder='identificador producto'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='descripcion'>
                    Descripción del mueble
                    <input
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        name='descripcion'
                        type="text"
                        placeholder='Nombre producto'
                        required

                    />
                    <label className='flex flex-col' htmlFor='valor'>
                        Valor del mueble
                        <input
                            name='valor'
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='number'
                            placeholder='Precio producto'
                            required
                        />
                    </label>
                    <label className='flex flex-col' htmlFor='estado'>
                        Estado del mueble
                        <input
                            name='estado'
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='text'
                            placeholder='Disponible o no disponible'
                            required
                        />
                    </label>

                </label>

                <button
                    type='submit'
                    className='col-span-2 bg-yellow-500 p-2 rounded-full shadow-md hover:bg-yellow-600 text-white font-bold m-5'
                >
                    Guardar mueble
                </button>
            </form>
        </div>
    );
};
const FormularioModificacionMuebles = ({ setMostrarTabla, listaMuebles, setMuebles }) => {
    const form = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);

        const nuevoMueble = {};
        fd.forEach((value, key) => {
            nuevoMueble[key] = value;
        });

        setMostrarTabla(true);
        setMuebles([...listaMuebles, nuevoMueble]);
        // identificar el caso de éxito y mostrar un toast de éxito
        toast.success('Mueble agregado con éxito');
        // identificar el caso de error y mostrar un toast de error
        //toast.error('Error creando un mueble');
    };

    return (
        <div>
            <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo mueble</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <label className='flex flex-col' htmlFor='id'>
                    Identificador del mueble
                    <input
                        name='id'
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        type='number'
                        placeholder='identificador producto'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='descripcion'>
                    Descripción del mueble
                    <input
                        className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                        name='descripcion'
                        type="text"
                        placeholder='Nombre producto'
                        required

                    />
                    <label className='flex flex-col' htmlFor='valor'>
                        Valor del mueble
                        <input
                            name='valor'
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='number'
                            placeholder='Precio producto'
                            required
                        />
                    </label>
                    <label className='flex flex-col' htmlFor='estado'>
                        Estado del mueble
                        <input
                            name='estado'
                            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                            type='txt'
                            placeholder='Disponible o no disponible'
                            required
                        />
                    </label>

                </label>

                <button
                    type='submit'
                    className='col-span-2 bg-yellow-500 p-2 rounded-full shadow-md hover:bg-yellow-600 text-white font-bold m-5'
                >
                    Guardar mueble
                </button>
            </form>
        </div>
    );
};
export default RegisProduc;
