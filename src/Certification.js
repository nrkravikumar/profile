import React, { Component } from 'react';
import data from "./data/data";

class Certification extends Component
{
    render()
    {  
    return (
        <div>
            {
                data.certification.map((crt,i) => {
                    return(
                        <div key={i}> 
                            <h2 id="hh">{crt.crse}</h2>
                            <p id="sp">
                                {/* <span>
                                    {
                                        crt.cfd.map((c,i) => {
                                        return(
                                            <div key= {i}>
                                                <li>{c.num}</li>
                                            </div>
                                        );
                                    })
                                    }
                                </span> */}
                                <span>{crt.cfd}</span>
                            </p>
                        </div>
                    );
                })
            }
        </div>
    );
    }
}

export default Certification;
