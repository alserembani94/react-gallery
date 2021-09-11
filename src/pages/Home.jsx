import '../styles/Home.css';
import styles from "../styles/Home.module.css";
import data from "../samples/galleries.json";

const Home = () => {
  return (
    <div className="App">
      {/* Using Home.css */}
      <header className="title_container">
        <p className="title_top">Welcome to</p>
        <div className="line_horizontal" />
        <p className="title_bottom">Juxtar Gallery</p>
      </header>

      {/* Using Home.module.css */}
      <div className={styles.gallery_container}>
        <div className={styles.gallery_card}>
          <div className={styles.gallery_image}>
            <img src="https://images.unsplash.com/photo-1631261178017-acb5cce2c885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Marilyn Forever" />
          </div>
          <div className={styles.gallery_content}>
            <p className={styles.gallery_title}>Marilyn Forever</p>
            <p className={styles.gallery_artist}>by Estelle Barbet</p>
            <p className={styles.gallery_price}>RM 8,500</p>
          </div>
        </div>

        <div className={styles.gallery_card}>
          <div className={styles.gallery_image}>
            <img src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1415&q=80" alt="Marilyn Forever" />
          </div>
          <div className={styles.gallery_content}>
            <p className={styles.gallery_title}>Marilyn Forever</p>
            <p className={styles.gallery_artist}>by Estelle Barbet</p>
            <p className={styles.gallery_price}>RM 8,500</p>
          </div>
        </div>

        <div className={styles.gallery_card}>
          <div className={styles.gallery_image}>
            <img src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80" alt="Marilyn Forever" />
          </div>
          <div className={styles.gallery_content}>
            <p className={styles.gallery_title}>Marilyn Forever</p>
            <p className={styles.gallery_artist}>by Estelle Barbet</p>
            <p className={styles.gallery_price}>RM 8,500</p>
          </div>
        </div>

        <div className={styles.gallery_card}>
          <div className={styles.gallery_image}>
            <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Marilyn Forever" />
          </div>
          <div className={styles.gallery_content}>
            <p className={styles.gallery_title}>Marilyn Forever</p>
            <p className={styles.gallery_artist}>by Estelle Barbet</p>
            <p className={styles.gallery_price}>RM 8,500</p>
          </div>
        </div>

        <div className={styles.gallery_card}>
          <div className={styles.gallery_image}>
            <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Marilyn Forever" />
          </div>
          <div className={styles.gallery_content}>
            <p className={styles.gallery_title}>Marilyn Forever</p>
            <p className={styles.gallery_artist}>by Estelle Barbet</p>
            <p className={styles.gallery_price}>RM 8,500</p>
          </div>
        </div>

        <div className={styles.gallery_card}>
          <div className={styles.gallery_image}>
            <img src="https://images.unsplash.com/photo-1570393080660-de4e4a15a247?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Marilyn Forever" />
          </div>
          <div className={styles.gallery_content}>
            <p className={styles.gallery_title}>Marilyn Forever</p>
            <p className={styles.gallery_artist}>by Estelle Barbet</p>
            <p className={styles.gallery_price}>RM 8,500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
