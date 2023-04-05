import { useState, useEffect } from 'react';
import useQuotableServices from '../../services/QuotableServices';

import styles from './Quote.module.css';

const Quote = () => {
  const { getQuote } = useQuotableServices();

  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);

  const fetchData = async () => {
    const { content, author } = await getQuote();
    setQuote(content);
    setAuthor(author);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.quoteContainer}>
      <h5>
        {quote}
        <span>{author}</span>
      </h5>

      <button onClick={fetchData}>
        <img src="/images/desktop/icon-refresh.svg" alt="refresh" />
      </button>
    </div>
  );
};

export default Quote;
