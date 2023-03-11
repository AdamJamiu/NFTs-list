import React, { useState, useEffect } from "react";
import AppContext from "../context/appContext";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: '212a947d-ebf9-4fe7-9115-d65c7a47ac10'
    }
};


export default function retreiveNftsDetails(id) {
    const { setIsLoaded, isErr } = React.useContext(AppContext);
    const [data, setData] = useState([])
    const url = `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${id}?chain=ethereum&refresh_metadata=false`;

    useEffect(() => {
        if (id === null) return;

        setIsLoaded(0);
        fetch(url, options)
            .then(response => response.json())
            .then(response => {
                setData(response);
                setIsLoaded(1);
                console.log(response)
            })
            .catch(err => {
                console.error(err)
                setIsLoaded(2);
            }
            );

    }, [id, isErr]);

    return { data };
}