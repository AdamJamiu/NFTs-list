import * as React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import "./index.css"
import fetchDetails from '../../hooks/fetchDetails';
import NftModal from '../nftModal';
import AppContext from '../../context/appContext';


export const GridCard = () => {
    const { data } = fetchDetails();
    const { handleOpen, setId } = React.useContext(AppContext);

    return (
        <>
            <div className="row">
                {data?.nfts?.map(item => (
                    <div className="card" key={item.token_id}>
                        <div className='img-wrapper' onClick={() => { handleOpen(); setId(item?.token_id) }}>
                            <img src={item?.cached_file_url} alt="Card Image" />
                        </div>
                        <p>{item?.token_id}</p>
                        <h2>{item?.chain}</h2>
                        <button className='card-btn'>
                            <BoltIcon />
                            <span>Read More</span>
                        </button>
                    </div>
                ))
                }

            </div>

            <NftModal />
        </>
    )
}

export default GridCard;