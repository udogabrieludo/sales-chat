import axios from 'axios'


export const getData =async()=>{

    let payload = {
        angular_test: "angular-developer"
    }
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/stub`, payload)
    return response

}