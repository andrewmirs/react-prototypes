import React from 'react';
import Table from './table';

export default () => {
    
    const students = [
        {
            name: 'James',
            course: 'Philosophy',
            grade: 77
        },
        {
            name: 'Hart',
            course: 'Web Development',
            grade: 85
        },
        {
            name: 'Ingram',
            course: 'Creative Writing',
            grade: 64
        }
    ];

    return (
        <div className='container'>
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}


