import React from 'react';
import {Table} from 'react-bootstrap';
import students from './student_data.json';
import {Link} from 'react-router-dom' 
class Marks extends React.Component{
    render(){
        const {params}=this.props.match;        
        let data=students.find(student=> student.id == params.id )
        return(<div>
            <h5>Maths-{data.maths}</h5>
            <h5>Science-{data.science}</h5>
            <h5>History{data.history}</h5>
            <h5>English-{data.english}</h5>
         </div>)
    }
}
export default Marks;