import React from 'react';

const Contributors = (props) => {
    
    // Destructuring props for the properties of contributors object
    const {itName, ceo, developers, location, donation, img} = props.contributor;
    
    return (
        <div className="col">
            <div className="card shadow h-100">
                <div className=' p-2'>
                    <img src={img} className="card-img-top" alt="..." />
                </div>
                <div className="card-body bg-info bg-opacity-10">
                    <h5>Institution: {itName}</h5>
                    <p>CEO: {ceo}</p>
                    <p>Total Delopers: {developers}</p>
                    <p>Location: {location}</p>
                    <p>Donation: {donation}</p>
                    <button className='btn btn-info d-block mx-auto text-white' 
                            onClick={() => props.subscribeBtn(props.contributor)}>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Contributors;