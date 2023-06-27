import {GoogleLogout} from 'react-google-login'

const clientId = "950526876502-araq01tdsu8cef71ek5kse7j3hmnk2h3.apps.googleusercontent.com"

export default function GoogleLogoutComp(){
        const onSuccess = () => {
            console.log("Log out successful")
        }
        return (
            <div id="signOutButton">
                <GoogleLogout
                clientId = {clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
                />
            </div>
        )
}