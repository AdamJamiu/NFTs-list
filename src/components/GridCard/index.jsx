import * as React from 'react';
import BoltIcon from '@mui/icons-material/Bolt';
import "./index.css"
import fetchDetails from '../../hooks/fetchDetails';
import NftModal from '../nftModal';
import AppContext from '../../context/appContext';


export const GridCard = () => {
    const { data } = fetchDetails();
    const { handleOpen, setId } = React.useContext(AppContext);
    const convertDate = (props) => {
        return new Date(props).toLocaleDateString('default', { day: "2-digit", month: 'long' });
    }

    return (
        <>
            <div className="row">
                {data?.nfts?.map(item => (
                    <div className="card" key={item.token_id}>
                        <div className='img-wrapper' onClick={() => { handleOpen(); setId(item?.token_id) }}>
                            <img src={item?.cached_file_url} alt="Card Image" />
                        </div>
                        <div className='card_cont'>
                            <p>{item?.token_id}</p>
                            <h2>{item?.chain}</h2>
                            <span className='card-info'>Update date: <span>{convertDate(item?.updated_date)}</span></span>
                        </div>
                        <a href={`https://opensea.io/assets/ethereum/${item?.contract_address}/${item?.token_id}`}>
                            <button className='card-btn'>
                                <BoltIcon />
                                <span>Read More</span>
                            </button>
                        </a>
                    </div>
                ))
                }

            </div >

            <NftModal />
        </>
    )
}

export default GridCard;