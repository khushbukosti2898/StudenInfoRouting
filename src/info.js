import React from 'react';
import {Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import students from './student_data.json';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Detail from './detail';
import Marks from './marks'


class Info extends React.Component{
    render(){
        const {params}=this.props.match;        
        const data=students.filter(student=> student.id == params.id )
        return(<div>
                <h5>Id- {data[0].id}</h5>
                <h5>FirstName- {data[0].first_name}</h5>
                <h5>LastName- {data[0].last_name}</h5>

                
                <Link to={`/student/${data[0].id}/info`}>
                    <Button variant="info">Info</Button>
                </Link>
                <Link to={`/student/${data[0].id}/marks`}>
                    <Button variant="dark">Marks</Button>
                </Link>
                <Switch>
                    <Route path={`/student/:id/info`} component={Detail} /> 
                    <Route path={`/student/:id/marks`} component={Marks} /> 
               </Switch>
            </div>
        )
    }
}
export default Info;