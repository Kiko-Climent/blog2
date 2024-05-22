import axios from "axios";
import {
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_FAIL,

} from './types'

export const get_categories = () => async dispatch => {
    console.log("Iniciando get_categories...");
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        console.log("Realizando solicitud a la API...");
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category/list`, config)

        console.log("Respuesta recibida:", res.data);

        if(res.status === 200){
            console.log("Solicitud exitosa. Actualizando estado de Redux con las categorías recibidas...");
            dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else {
            dispatch({
                type: GET_CATEGORIES_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_CATEGORIES_FAIL
        })
    }
}