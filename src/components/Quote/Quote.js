import { useState, useEffect } from 'react';
import useQuotableServices from '../../services/QuotableServices';
import { MoonLoader } from 'react-spinners';

import styles from './Quote.module.css';

const Quote = () => {
  const { getQuote } = useQuotableServices();

  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { content, author } = await getQuote();
    setQuote(content);
    setAuthor(author);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.quoteContainer}>
      {loading ? (
        <MoonLoader color={'var(--white)'} />
      ) : (
        <>
          <h5>
            {quote}
            <span>{author}</span>
          </h5>

          <button onClick={fetchData}>
            <img src="/images/desktop/icon-refresh.svg" alt="refresh" />
          </button>
        </>
      )}
    </div>
  );
};

export default Quote;
