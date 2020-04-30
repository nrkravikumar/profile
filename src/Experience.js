import React, { Component } from 'react';
import data from "./data/data";

class Experience extends Component
{
    render()
    {
        return (
            <div id="exp">
                {
                    data.experience.map((ex,i) => {
                        return(
                            <div key={i}> 
                                <h2 id="hh">{ex.desg}</h2>
                                <p id="sp">
                                <span>{ex.desc}</span>
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Experience;
