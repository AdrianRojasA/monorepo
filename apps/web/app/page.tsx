import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {User} from "@repo/types"
import { getUsers } from "../server/user";
export default async function Home() {
  const users: User[] = await getUsers();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ol>
      </main>
    </div>
  );
}
