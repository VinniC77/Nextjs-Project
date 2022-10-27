import styles from "../styles/Header.module.css";

const Header = () => {
// const x = 3

  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={styles.description}>Keep up to date with the latest web dev news</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'yellow' : 'green'};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
