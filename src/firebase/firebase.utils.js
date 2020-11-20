import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBnLr4ZN1Ph9qstxJqoEIvwvKmtE-NFGaA",
    authDomain: "cloth-shop-app.firebaseapp.com",
    databaseURL: "https://cloth-shop-app.firebaseio.com",
    projectId: "cloth-shop-app",
    storageBucket: "cloth-shop-app.appspot.com",
    messagingSenderId: "553413575230",
    appId: "1:553413575230:web:c3d17b0331efcd6ee9076f",
    measurementId: "G-JPGVH11WVP"
};

//an authentication function created to obtain the user details/objects and used in both our app state and firestore db
export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user data', error.message)
        }

    }
    return userRef;

 



      
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

auth.useDeviceLanguage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
