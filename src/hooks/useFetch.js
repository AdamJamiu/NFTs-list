import { useState, useEffect } from "react";

export default function useFetch(path) {
    const [data, setData] = useState([])
    const address = "0xf5663d0eee3620c4a88e28e392aac72d077a8c4d";
    const auth = "212a947d-ebf9-4fe7-9115-d65c7a47ac10";

    var myHeaders = new Headers();
    myHeaders.append("Authorization", auth);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        if (!path) return;

        fetch(`https://api.nftport.xyz/v0/accounts/${address}?chain=ethereum&page_size=50&include=metadata`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setData(result.nfts)
                // console.log(result)
            })
            .catch(error => console.log('error', error));

    }, []);
    console.log(data)

    return { data };
}