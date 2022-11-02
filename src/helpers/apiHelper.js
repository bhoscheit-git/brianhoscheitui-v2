import { getJwt } from './auth'

export const makeGetApiCall = async (route) => await fetch(`${process.env.REACT_APP_SERVICE_URL}/${route}`)

export const makePutApiCall = async (route, body) => {
    const jwt = await getJwt()
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify(body)
    }
    return await fetch(`${process.env.REACT_APP_SERVICE_URL}/${route}`, options)
}

export const makeDeleteApiCall = async (route, body) => {
    const jwt = await getJwt()
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`
        },
        body: JSON.stringify(body)
    }
    return await fetch(`${process.env.REACT_APP_SERVICE_URL}/${route}`, options)
}
