import React, { Component } from 'react';
import data from "./data/data";

class Basic extends Component
{
    render()
    {
        return (
            <div>
                {
                    data.basicInfo.map((bs,i) => {
                        return(
                            <div key={i}>
                                <h2>{bs.name}</h2>
                                <span>{bs.role}</span><br/>
                                <span>{bs.email}</span><br/>
                                <span>{bs.mobile}</span>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Basic;
