import { IonCard } from "@ionic/react";
import { Page } from "../components/Auth/Layout/Layout";
import LoginForm from "../components/Auth/LoginForm";

const Login = () => {
    return(
        <Page title="Login" description="Log in og få adgang til vores sang arkiv">
            <IonCard>
                <LoginForm />
            </IonCard>
        </Page>
    )
}

export default Login;