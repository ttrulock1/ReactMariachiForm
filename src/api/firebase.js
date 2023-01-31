import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, query, setDoc, doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyANQjoBRb8r4ul73YY2n1ED6G0j4EveCl0",
  authDomain: "mariachi1.firebaseapp.com",
  projectId: "mariachi1",
  storageBucket: "mariachi1.appspot.com",
  messagingSenderId: "437780726450",
  appId: "1:437780726450:web:8caf92d0ba601b38c2ffab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


async function addUserData(userDataChanges) {
  await setDoc(doc(db, "users", userDataChanges.uid), userDataChanges , { merge: true })
  return await (await getDoc(doc(db, "users", userDataChanges.uid))).data()
}

async function updateUserData(userDataChanges){
  const existingData= (await getDoc(doc(db, "users", userDataChanges.uid))).data()
  const participants= existingData?.participants || []
  for(const participanti in userDataChanges.participants){
    const participant = userDataChanges.participants[participanti]
    participants[participanti]= {
      ...participants[participanti],
      ...participant
    }
  }
  return addUserData({ ...userDataChanges, participants})
}

async function registerWithEmailAndPassword({ email, password }) {
  const response = await createUserWithEmailAndPassword(auth, email, password)
  const user = response.user
  const userData = await addUserData({
    uid: user.uid,
    email
  })
  return userData.data()
}

async function loginWithEmailAndPassword({ email, password }) {
  const response = await signInWithEmailAndPassword(auth, email, password)
  const user = response.user
  const userData = await getDoc(doc(db, "users", user.uid))
  console.log(userData.data())
  return userData.data()

}

async function logout() {
  await signOut(auth)
}

async function getAllUsers() {
  const userData = await getDocs(query(collection(db, "users")))
  return userData.docs.map((doc) => {
    return doc.data()
  })
}

async function getUserData(uid) {
  const userData = await getDoc(doc(db, "users", uid))
  console.log(userData.data())
  return userData.data()
}

export { loginWithEmailAndPassword as login, registerWithEmailAndPassword as register, logout, auth, getAllUsers, addUserData, getUserData, updateUserData }