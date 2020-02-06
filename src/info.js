import React from 'react';
import students from './student_data.json';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';


class Info extends React.Component{
    render(){
        const {params}=this.props.match;        
        const data=students.filter(student=> student.id == params.id )
        return(<div> 
            <Link to={`/student/${data[0].id}/info`}>Info</Link>
            {/* <Link to="/student/:id/mark">Marks</Link> */}
                <h3>{data[0].id}</h3>
                <h3>{data[0].first_name}</h3>
                <h3>{data[0].last_name}</h3>
                <Switch>
                <Route path={`/student/${data[0].id}/info`} component={Info}>
                </Route>
                {/* <Route path='/student/:id/mark' component={Mark}>
                </Route> */}
                
                
                </Switch>
            </div>
        )
    }
}
export default Info;