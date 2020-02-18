import React from 'react';
import {Button} from 'react-bootstrap';
import students from './student_data.json';
import {  Switch, Route, Link} from 'react-router-dom';
import Detail from './detail';
import Marks from './marks'


class Info extends React.Component{
    render(){
        const {params,path}=this.props.match;  
        console.log(this.props.match)
        let data=students.find(student=> student.id == params.id )
        return(<div>
                <h5>Id- {data.id}</h5>
                <h5>FirstName- {data.first_name}</h5>
                <h5>LastName- {data.last_name}</h5>
                <Link to={`/student/${data.id}/info`}>
                    <Button variant="info">Info</Button>
                </Link>
                <Link to={`/student/${data.id}/marks`}>
                    <Button variant="dark">Marks</Button>
                </Link>
                <Switch>
                    <Route path={`${path}/info`} component={Detail} /> 
                    <Route path={`${path}/marks`} component={Marks} /> 
               </Switch>
            </div>
        )
    }
}
export default Info;