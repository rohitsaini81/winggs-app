import React from 'react'
import { Highlight } from './Images'
import "./css/Highilights.css"
export default function Highilights() {
    return (
        <div className='flex'>
            <div className='High-w-70'><img src={Highlight} alt="" srcset="" /></div>
            <div>
                <font>
                    WINGGS provide great resources to their clients.
                </font>
                <ul>
                    <li>
                        people.
                    </li>
                    <li>
                        Processes.
                    </li>
                    <li>
                        Technology.
                    </li>
                    <li>
                        We Utilize the best
                    </li>
                </ul>
            </div>
        </div>
    )
}