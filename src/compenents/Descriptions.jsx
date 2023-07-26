import React from 'react';
import './descriptions.css'

import { FaArrowDown, FaArrowUp} from 'react-icons/fa';

const Descriptions = () => {
    return <div className="section section__descriptions">
        <div className="card">

            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>28 °F</h2>

        </div>
        <div className="card">

            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>28 °F</h2>

        </div>
        <div className="card">

            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>28 °F</h2>

        </div>
        <div className="card">

            <div className="description__card-icon">
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>28 °F</h2>

        </div>

    </div>
};

export default Descriptions;