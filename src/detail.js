import React from 'react';
import {Table} from 'react-bootstrap';
import students from './student_data.json';
import {Link} from 'react-router-dom' 
class Detail extends React.Component{
    render(){
        const {params}=this.props.match;        
        let data=students.find(student=> student.id == params.id )
        return(<div>
            <h5>Mother- {data.mother}</h5>
            <h5>DOB- {data.DOB}</h5>
            <h5>Email- {data.email}</h5>
            <h5>Standard- {data.standard}</h5>
            <h5>Gender- {data.gender}</h5>
         </div>)
    }
}
export default Detail;