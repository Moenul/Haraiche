import { db } from "@/main";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

export async function fetchReportsForUser(userId) {
  const reportsRef = collection(db, "reports");
  const reportsQuery = query(
    reportsRef,
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );
  const snapshot = await getDocs(reportsQuery);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
