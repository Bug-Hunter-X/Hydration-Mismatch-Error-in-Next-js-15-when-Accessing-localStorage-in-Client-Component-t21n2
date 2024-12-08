```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      {user && <p>Welcome, {user.name}!</p>}
      {!user && <p>Please login to see your profile.</p>}
    </div>
  );
}
```