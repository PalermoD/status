import axios from 'axios'
import {
    AUTH_USER,
    UNAUTH_USER
} from './types'
import store from '../../store'

const ROOT_URL = 'http://localhost:3090'

export function signinUser(history, {email, password}){
    let signin = dispatch => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                store.dispatch({type: AUTH_USER})

                localStorage.setItem('token', response.data.token)

                history.push('/categories')
            })
            .catch(err => {
                store.dispatch({type: UNAUTH_USER})
            })
    }
    signin()
}
