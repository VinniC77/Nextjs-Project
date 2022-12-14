import Link from "next/link";
import styles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} className={styles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
    </Link>
  );
};

export default ArticleItem;
