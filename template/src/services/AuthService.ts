import auth from '@react-native-firebase/auth';

class AuthService {
  static handleUserStateChange = (user: any) => console.log('User -> ', user);

  static signup = async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (e: any) {
      if (['auth/email-already-in-use', 'auth/invalid-email'].includes(e.code))
        throw new Error('Email address is already in use!');

      console.error(e);
    }
  };

  static login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User account created & logged in!');
    } catch (e: any) {
      if (['auth/invalid-email', 'auth/user-not-found'].includes(e.code))
        throw new Error('Email address is invalid!');

      if (e.code === 'auth/wrong-password') throw new Error('Wrong password!');

      console.error(e);
    }
  };

  static logout = async () => {
    try {
      await auth().signOut();
      console.log('User account logged out!');
    } catch (e: any) {
      console.error(e);
    }
  };
}

export default AuthService;
