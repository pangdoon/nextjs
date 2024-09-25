import ClientComponent from "./client-component";
import styles from "./page.module.css";
import ServerComponent from "./sever-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스페이지
      <ClientComponent>
        <ServerComponent/>
      </ClientComponent>
    </div>
  );
}
