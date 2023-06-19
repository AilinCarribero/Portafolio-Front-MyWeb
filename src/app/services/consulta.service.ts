import { Consulta } from "../components"

interface Props {
    nombre: string,
    email: string,
    telefono: string,
    mensaje: string
}

//const url = `${process.env.URL_API}/consulta`

const url = 'http://localhost:5050/api/consulta'

export const postApiConsulta = async (consulta: Consulta) => {
    const res = await fetch(`${url}/new`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(consulta)
    })
    
    return res.json()
}