import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore;

firestore
  .collection("users")
  .doc("eppcMM6Rf95PcgehEZiJ")
  .collection("cartItems")
  .doc("rOx5AAARlcr7dPBRVEBP");

firestore.doc("/users/eppcMM6Rf95PcgehEZiJ/cartItems/rOx5AAARlcr7dPBRVEBP");

firestore.collection("/users/eppcMM6Rf95PcgehEZiJ/cartItems");
