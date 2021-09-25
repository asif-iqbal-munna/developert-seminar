import React, { useEffect, useState } from 'react';
import Contributors from '../Contributors/Contributors';
import Contstatus from '../Contstatus/Contstatus';
import './Main.css';

const Main = () => {

    const [contributors, setContributors] = useState([]);
    console.log(contributors);
    useEffect( () => {
        fetch('./seminardata.json')
            .then(resp => resp.json())
            .then(data => setContributors(data))
    },[])

    return (
        <main className="py-5">
            <div className="container">
                <div className="row">
                    <section className="col-9">
                        <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {
                                contributors.map( contributor => <Contributors
                                    key={contributor.key}
                                    contributor={contributor}
                                />)
                            }
                        </div>
                    </section>
                    {/* <Contributors contributors={contributors}/> */}
                    <section className="col-3">
                        <Contstatus />
                    </section>
                </div>
            </div>
        </main>
    );
};

export default Main;