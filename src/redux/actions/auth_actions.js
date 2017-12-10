//import thunk from 'redux-thunk';
import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}){
    console.log('what up')
    let signin = dispatch => {
        console.log('calling...')
        axios.post(`${ROOT_URL}/signin`, {email, password})
    }

    signin()
}
