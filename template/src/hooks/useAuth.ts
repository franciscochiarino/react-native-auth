import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async user => {
      if (user) setUser(user);
      else setUser(false);
    });

    return () => unsubscribe();
  });

  return [user];
};

export default useAuth;
