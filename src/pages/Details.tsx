import { IonContent } from "@ionic/react";
import { Page } from "../components/Auth/Layout/Layout";
import SongDetails from "./../components/Song/SongDetails";

const Details:React.FC = () => {
    const song = SongDetails();
    return(
        <>
            {song && (
                <Page title={song!.title} description={song.name}>
                    <IonContent className="ion-padding">
                        <h1>{song.title}</h1>
                        <h3>{song.name}</h3>
                        <p>{song.content}</p>
                    </IonContent>
                </Page>
            )}
        </>

    )
}

export default Details;