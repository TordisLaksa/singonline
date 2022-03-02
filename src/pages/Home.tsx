import { IonSearchbar } from "@ionic/react";
import { Page } from "../components/Auth/Layout/Layout";
import { useState } from "react";
import SongList from "../components/Song/SongList";

const Home: React.FC = () => {

    const [ keyword, setKeyword ] = useState<string>('')

//void betyder at vores function ikke har nogen return /  altså den returnerer ikke noget
    const handleSearch = (e:any):void => {
        setKeyword(e.target.value);
        
        
    }

    return(
        <Page title="Velkommen til SingOnline" description="Vælg eller søg efter en sang">
            <IonSearchbar onIonInput={handleSearch} />
            <SongList keyword={keyword}/>
        </Page>
    )
}

export default Home;