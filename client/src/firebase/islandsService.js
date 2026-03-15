import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

const islandsRef = () => collection(db, "islands");
const islandsQuery = () => query(islandsRef(), orderBy("name"));
const toIsland = (snap) => ({ id: snap.id, ...snap.data() });

export const subscribeToIslands = (callback) =>
  onSnapshot(islandsQuery(), (snapshot) => callback(snapshot.docs.map(toIsland)));

export const getIslands = async () =>
  (await getDocs(islandsQuery())).docs.map(toIsland);

export const addIsland = (data) =>
  addDoc(islandsRef(), { ...data, image: data.image || "", createdAt: Date.now() });

export const updateIsland = (id, data) =>
  updateDoc(doc(db, "islands", id), { ...data, image: data.image || "" });

export const deleteIsland = (id) =>
  deleteDoc(doc(db, "islands", id));
