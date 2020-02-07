import React from 'react';
import {Table} from 'react-bootstrap';
import students from './student_data.json';
import {Link} from 'react-router-dom' 
class Marks extends React.Component{
    render(){
        const {params}=this.props.match;        
        const data=students.filter(student=> student.id == params.id )
        return(<div>
            <h5>Maths-{data[0].maths}</h5>
            <h5>Science-{data[0].science}</h5>
            <h5>History{data[0].history}</h5>
            <h5>English-{data[0].english}</h5>
         </div>)
    }
}
export default Marks;