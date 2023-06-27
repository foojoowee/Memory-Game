import {GoogleLogin} from 'react-google-login'

const clientId = "950526876502-araq01tdsu8cef71ek5kse7j3hmnk2h3.apps.googleusercontent.com"

export default function GoogleLoginComp(){
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res)
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}