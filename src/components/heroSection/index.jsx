import React from 'react'
import fetchNfts from '../../hooks/fetchNfts'
import VerifiedIcon from '@mui/icons-material/Verified';
import "./index.css"

export const Hero = () => {
    const { data } = fetchNfts()

    const name = data?.contract?.name.replace(/([a-z])([A-Z])/g, '$1 $2');

    return (
        <>
            <div className="hero">
                <img className='hero-cover' src={data?.contract?.metadata?.cached_banner_url} alt="" />
                <div className='hero-thumb_nail'>
                    <img className="thumb_img" src={data?.contract?.metadata?.cached_thumbnail_url} alt="hero thumbnail" />
                </div>
            </div>

            <div className="hero-info">
                <span className="hero-title">{name}</span>
                <VerifiedIcon color='primary' />

                <div className='grid-container'>
                    <div>
                        <p>Created at: <span className='info-value'>{data?.nft?.mint_date}</span></p>
                    </div>
                    <div>
                        <p>Created at: <span className='info-value'>{data?.nft?.mint_date}</span></p>
                    </div>
                </div>

                <div className='description_container'>
                    <p className='description'>{data?.contract?.metadata?.description}</p>
                </div>
            </div>


        </>
    )
}


export default Hero;