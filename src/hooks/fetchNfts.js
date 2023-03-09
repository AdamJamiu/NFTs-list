import React from "react";
import AppContext from "../context/appContext";

export default function fetchNfts() {
    const [data, setData] = React.useState([])
    const url = "https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/567?chain=ethereum&refresh_metadata=false";
    const auth = "212a947d-ebf9-4fe7-9115-d65c7a47ac10";
    const { setIsLoading } = React.useContext(AppContext);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", auth);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    React.useEffect(() => {
        setIsLoading(true);
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
                console.log('error', error)
            });

    }, []);

    return { data };
}