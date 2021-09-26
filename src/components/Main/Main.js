import React, { useEffect, useState } from 'react';
import Contributors from '../Contributors/Contributors';
import Contstatus from '../Contstatus/Contstatus';

const Main = () => {

    // To load and show all contributors data to the card
    const [contributors, setContributors] = useState([]);

    // Set the subscribers to show to the board
    const [subscribers, setSubscribers] = useState([]);
    const [names, setNames] = useState([])

    // loading data from the public folder 'seminardata.json'
    useEffect( () => {
        fetch('./seminardata.json')
            .then(resp => resp.json())
            .then(data => setContributors(data))
    },[])

    let subscribersNames = [];

    // Subscribe Button Handler
    const handleSubscribeBtn = subscriber => {
        // Getting Subscribers
        const totalSubscribers = [...subscribers, subscriber];
        
        // Set subscribers to show data to the board
        setSubscribers(totalSubscribers);

        // Set Name for showing names to the board
        for(const subscriber of totalSubscribers){
            subscribersNames.push(subscriber.itName);
            setNames(subscribersNames)
        }
    }
    
    return (
        <main className="py-5">
            <div className="container">
                <div className="row">
                    {/* contributors cards data container  */}
                    <section className="col-9">
                        <h3 className="text-center text-info mb-4">Potray Top Contributors To The Board</h3>
                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {
                                contributors.map( contributor => <Contributors
                                    key={contributor.key}
                                    contributor={contributor}
                                    subscribeBtn = {handleSubscribeBtn}
                                />)
                            }
                        </div>
                    </section>
                    {/* Showing top developers data to the board */}
                    <section className="col-3">
                        <Contstatus 
                            subscribers={subscribers}
                            names={names}
                        />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;