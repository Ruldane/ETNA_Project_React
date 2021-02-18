import axios from "axios";
import {GET_ERRORS, SET_CURRENT_USER} from "./types";
import setJWTToken from "../SecurityUtility/setJWTToken";
import jwtDecode from "jwt-decode";

export const createNewUser = (user, history) => async dispatch => {
    try {
        await axios.post("/api/users/register", user);
        history.push("/login");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    }catch (e){
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
}

export const login = (Login) => async dispatch => {
    try {
        // login request
        const res = await axios.post("/api/users/login", Login);
        // extract token
        const {token} = res.data;
        // store the token in localstorage
        localStorage.setItem("jwtTokens", token)
        // set token in header
        setJWTToken(token)
        // decode token on React using jwt-decode
        const decodeToken = jwtDecode(token);
        // dispatch to security reducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decodeToken
        })
    } catch (e){
        dispatch({
            type: GET_ERRORS,
            payload: e.response.data
        });
    }
}

export const logout = () => async dispatch => {
    localStorage.removeItem("jwtTokens")
    setJWTToken(false)
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    })
}