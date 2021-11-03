import {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'
import {Loading, CardUser} from './components'
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getUsers = async () => {
    try {
      setLoading(true)
      const {data}= await axios.get('https://randomuser.me/api/?results=2')
      console.log('result', data)
      setUsers(data.results)
    } catch(e) {

    } finally {
      setTimeout(function(){
        setLoading(false)
      }, 1000);
    }
  }

  useEffect(() => {
    getUsers()
  },[])
  return (
    <div className="App">
      <div>
        <h3>FindFriend App</h3>
      </div>
      <div className="flex">
        {
          !loading ? users.map((item) => (
            <CardUser data={item} /> 
          )) : <>
          <Loading />
          <Loading />
          </>
        }
      </div>
     <button disabled={loading} className="button primary" onClick={getUsers}>Find</button>
    </div>
  );
}

export default App;
