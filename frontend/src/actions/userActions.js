import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstans";
import axios from "axios";
/**
 * Esta accion va hacer el accion que hará el
 * request to log in y obtener el token
 */

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    /**
     * Cuando estamos enviando data al servidor
     * Debemos enviar los headers, uno de ellos
     * es el content type
     */
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Hacemos el request
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    /**
     * La data que está respondiendo es
     * _id:
     * name:
     * email:
     * isAdmin
     * token
     */

    // Queremos hacer el dispatch del user
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
