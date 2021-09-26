import React, { useEffect, useState } from 'react';
import Contributors from '../Contributors/Contributors';
import Contstatus from '../Contstatus/Contstatus';
import './Main.css';

const Main = () => {

    const [contributors, setContributors] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [names, setNames] = useState([])
    // console.log(contributors);
    useEffect( () => {
        fetch('./seminardata.json')
            .then(resp => resp.json())
            .then(data => setContributors(data))
    },[])

    let subscribersNames = [];
    const handleSubscribeBtn = subscriber => {
        // console.log(subscribers);
        const totalSubscribers = [...subscribers, subscriber];
        // console.log(subscriber.itName);
        // console.log(totalSubscribers);
        setSubscribers(totalSubscribers);
        for(const subscriber of totalSubscribers){
            subscribersNames.push(subscriber.itName);
            setNames(subscribersNames)
        }
    }
    
    return (
        <main className="py-5">
            <div className="container">
                <div className="row">
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