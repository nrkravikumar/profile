import React, { Component } from 'react';
import data from "./data/data";

class Education extends Component
{
    render()
    {  
    return (
        <table id="edt">
            <tr id="tt">
                <th>Degree</th>
                <th>Institute</th>
                <th>Percentage</th>
                <th>Year</th>
            </tr>
            {
                data.education.map((ed,i) => {
                    return(
                        <tr key={i}>
                            <td>{ed.degree}</td> 
                            <td>{ed.institute}</td>
                            <td>{ed.percentage}</td>
                            <td>{ed.year}</td>
                        </tr>
                    );
                })
            }
        </table>
    );
    }
}

export default Education;
