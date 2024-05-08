import { Timestamp } from "firebase/firestore";
interface Messages {
  date: Timestamp,
  text: string,
  type:string,
  userID: string,
}

export default Messages;