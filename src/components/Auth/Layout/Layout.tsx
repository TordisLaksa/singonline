import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect } from "react";
import { useParams } from "react-router";

interface iPageProps {
    title: string;
    description: string;
    children: any;

}

const Page: React.FC<iPageProps> = ({ title, description, children }) => {
    const { slug } = useParams<{slug:string}>()

    useEffect(() => {
        document.title = title;
        const meta_desc = document.querySelector('meta[name="description"]')
        if(meta_desc) {
            meta_desc.setAttribute('content', description)
        }
    })
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>SingOnline</IonTitle>
                        {slug && (
                            <IonButtons slot="start">
                                <IonBackButton defaultHref="/"></IonBackButton>
                            </IonButtons>
                        )}
                    </IonToolbar>
                </IonHeader>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </IonPage>
        </>
    )
}

const ContentWrapper = (props:{children:any}) => {
    return <IonContent>{props.children}</IonContent>
}

export { Page, ContentWrapper }