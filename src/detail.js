import React from 'react';
import {Table} from 'react-bootstrap';
import students from './student_data.json';
import {Link} from 'react-router-dom' 
class Detail extends React.Component{
    render(){
        const {params}=this.props.match;        
        const data=students.filter(student=> student.id == params.id )
        return(<div>
            <h5>Mother- {data[0].mother}</h5>
            <h5>DOB- {data[0].DOB}</h5>
            <h5>Email- {data[0].email}</h5>
            <h5>Standard- {data[0].standard}</h5>
            <h5>Gender- {data[0].gender}</h5>
         </div>)
    }
}
export default Detail;