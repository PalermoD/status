import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

export function signinUser(history, {email, password}){
    let signin = dispatch => {
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response => {
                history.push('/categories')
            })
            .catch(err => {

            })
    }
    signin()
}
