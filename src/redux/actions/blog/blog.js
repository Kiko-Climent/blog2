import axios from "axios";
import {
    GET_BLOG_LIST_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_SUCCESS,
    GET_BLOG_LIST_CATEGORIES_FAIL,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL,
    GET_SEARCH_BLOG_SUCCESS,
    GET_SEARCH_BLOG_FAIL,
    GET_BLOG_LIST_FAIL,

} from './types'
import { json } from "react-router-dom";

export const get_blog_list = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_FAIL
        });
    }
}

export const get_blog_list_page = (page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/list?p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_FAIL
        });
    }
}

export const get_blog_list_category = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_blog_list_category_page = (slug, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/by_category?slug=${slug}&p=${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_CATEGORIES_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_LIST_CATEGORIES_FAIL
        });
    }
}

export const get_blog = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/detail/${slug}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_BLOG_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_BLOG_FAIL
        });
    }
}

export const search_blog = (search_term) => async dispatch => {
    console.log("search_blog action called with term:", search_term);
    
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search?s=:${search_term}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_SEARCH_BLOG_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_SEARCH_BLOG_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_SEARCH_BLOG_FAIL
        });
    }
}

export const search_blog_page = (search_term, page) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{

        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/search?s=${search_term}&p=$${page}`, config)

        if(res.status === 200){
            dispatch({
                type: GET_SEARCH_BLOG_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_SEARCH_BLOG_FAIL
            });
        }

    }catch(err){
        dispatch({
            type: GET_SEARCH_BLOG_FAIL
        });
    }
}
