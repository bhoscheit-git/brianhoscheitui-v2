import { Auth } from 'aws-amplify'

export const getJwt = async () => {
    const session = await Auth.currentSession()
    const accessToken = session.getAccessToken();
    return accessToken.getJwtToken()
}