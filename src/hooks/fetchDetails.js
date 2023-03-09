import { useState, useEffect } from "react";

export default function useFetch(path) {
    const [data, setData] = useState([])
    const url = "https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum"
    const auth = "212a947d-ebf9-4fe7-9115-d65c7a47ac10";

    var myHeaders = new Headers();
    myHeaders.append("Authorization", auth);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result)
            }
            )
            .catch(error => console.log('error', error));

    }, []);

    return { data };
}