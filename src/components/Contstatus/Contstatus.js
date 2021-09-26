import React from 'react';

const Contstatus = (props) => {
    const {subscribers} = props
    let total = 0;
    for(const subscriber of subscribers){
        total = total + subscriber.donation;
    }
    let count = 100;
    return (
        <div className='text-center'>
            <h2 className='text-info'>Board</h2>
            <h5>Top Contributors: {subscribers.length}</h5>
            <p>Total Contribution: ${total}</p>
            <ul>
                {
                    props.names.map(name => <li
                        key={count++}
                    >{name}</li>)
                }
            </ul>
        </div>
    );
};

export default Contstatus;