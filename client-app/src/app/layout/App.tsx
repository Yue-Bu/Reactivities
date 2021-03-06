import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/Activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/Activities').then(response=>{
      console.log(response);
      setActivities(response.data)
    })
  },[])
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivites'/>
        <List>
        {activities.map((activity) =>(
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
