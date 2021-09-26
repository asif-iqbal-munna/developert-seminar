import React from 'react';

const Contstatus = (props) => {
    const {subscribers} = props;
    //  Counting Total donation for the board
    let total = 0;
    for(const subscriber of subscribers){
        total = total + subscriber.donation;
    }
    let count = 100;
    return (
        <div className='text-center bg-light shadow-sm border rounded'>
            <h2 className='text-info'>Board</h2>
            <h5>Top Contributors: {subscribers.length}</h5>
            <p>Total Contribution: ${total}</p>
            <h6>Contributors Names</h6>
            <ul className="list-group list-group-numbered">
                {   
                    // mapping names array for showing name of the companies. 
                    props.names.map(name => <li
                        key={count++}
                        className="list-group-item bg-light"
                    >{name}</li>)
                }
            </ul>
        </div>
    );
};

export default Contstatus;