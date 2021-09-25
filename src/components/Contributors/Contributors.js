import React from 'react';

const Contributors = (props) => {
    // console.log(props.contributor);
    const {itName, ceo, developers, location, donation, img} = props.contributor;
    console.log(itName);
    return (
        <div className="col">
            <div className="card h-100">
                <div>
                    <img src={img} class="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5>Institution: {itName}</h5>
                    <p>CEO: {ceo}</p>
                    <p>Total Delopers: {developers}</p>
                    <p>Location: {location}</p>
                    <p>Donation: {donation}</p>
                </div>
            </div>
        </div>
        // <div className="col">
        //     
        //     <p>{ceo}</p>
        //     <p>{developers}</p>
        //     <p>{location + " " + donation}</p>
        //     <img src={img} alt="" />
        // </div>
    );
};

export default Contributors;