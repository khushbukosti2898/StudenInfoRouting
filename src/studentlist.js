import React from 'react';
import {Table} from 'react-bootstrap';
import data from './student_data.json';
import {Link} from 'react-router-dom' 
import './App.css';

 class StudentList extends React.Component{
     state={
         students:[]
     }
     componentDidMount() {
         this.setState({
             students:data
         })
     }
     render(){
         return(
             <div>
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map( student=>
                        {
                            return <tr>
                                <td>{student.id}</td>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>
                                    <Link to={`/student/${student.id}`}>
                                        <input type="button" 
                                            value="Detail">
                                    </input></Link>
                                </td>
                            </tr>
                        }
                        )}
                </tbody>
            </Table>
            </div>)
         
         }
 }

export default StudentList;