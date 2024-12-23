import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // 서버 URL(LoadBalancer URL)
    fetch('http://cloudcicd-1102936244.ap-northeast-2.elb.amazonaws.com')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
