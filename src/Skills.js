import React, { Component } from 'react';
import data from "./data/data";

class Skills extends Component
{
    render()
    {  
        return (
            <table id="tb">
                <tr id="tt">
                    <th>Language</th>
                    <th>Percentage</th>
                </tr>
                {
                    data.skills.map((sk,i) => {
                        return(
                            <tr key={i}>
                                <td>{sk.Name}</td> 
                                <td>{sk.per}</td>
                            </tr>
                        );
                    })
                }
            </table>
        );
    }
}

export default Skills;
