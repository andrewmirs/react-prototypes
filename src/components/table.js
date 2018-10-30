import React from 'react';

export default () => {
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Andre</td>
                    <td>Calculus</td>
                    <td>74</td>
                </tr>
                <tr>
                    <td>Mateo</td>
                    <td>Yoga Fundamentals</td>
                    <td>93</td>
                </tr>
                <tr>
                    <td>Willy</td>
                    <td>Graphic Design</td>
                    <td>91</td>
                </tr>
            </tbody>
        </table>
    )
}