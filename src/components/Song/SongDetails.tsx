import { useParams } from "react-router";
import { useAuth } from "../Auth/AuthProvider"
import { useState, useEffect } from "react";
import axios from "axios";

const SongDetails = () => {
    interface iSong{
        id: number;
        title: string;
        content: string;
        name: string;
        slug: string;
    }

    const { loginData } = useAuth();
    const [ apiData, setApiData ] = useState<iSong>()
    const { slug } = useParams<{ slug: string}>()

    useEffect(() => {
        const getData = async () => {
            const options = {
                headers: {
                    Authorization: `Bearer ${loginData.access_token}`
                }
            }
            const url = `https://api.mediehuset.net/singonline/songs/${slug}`
            const result = await axios.get(url, options)
            setApiData(result.data.item);
            
        }
        getData()
    }, [loginData.access_token, slug])

    return apiData ? apiData : null
}

export default SongDetails;