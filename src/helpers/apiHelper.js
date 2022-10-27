
export const makeGetApiCall = async (route) => await fetch(`${process.env.REACT_APP_SERVICE_URL}/${route}`)
