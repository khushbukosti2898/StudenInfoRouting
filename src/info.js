import React from 'react';
import {Button} from 'react-bootstrap';
import students from './student_data.json';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Detail from './detail';
import Marks from './marks'
import NoMatch from './NoMatch'


class Info extends React.Component{

    render(){
        const {params}=this.props.match;        
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
                    <Route path={`/student/:id/info`} component={Detail} /> 
                    <Route path={`/student/:id/marks`} component={Marks} /> 
                    
               </Switch>
            </div>
        )
    }
}
export default Info;