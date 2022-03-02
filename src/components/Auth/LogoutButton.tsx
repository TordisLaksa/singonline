import { useAuth } from "./AuthProvider"
import { IonButton, IonIcon } from "@ionic/react";

const LogoutButton: React.FC = () => {
    const { setLoginData } = useAuth();

    const handleLogout = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }

    return(
        <IonButton onClick={handleLogout}>
            <IonIcon icon="log-out-outline" slot="icon-only" title="Log af"></IonIcon>
        </IonButton>
    )
} 

export default LogoutButton