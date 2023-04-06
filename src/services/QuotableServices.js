import axios from 'axios';

const useQuotableServices = () => {
  const _apiBase = 'https://api.quotable.io/random';

  const getQuote = async () => {
    try {
      const response = await axios.get(_apiBase);
      const { content, author } = response.data;

      return { content, author };
    } catch (error) {
      console.error(error);
      return { content: '', author: '' };
    }
  };

  return {
    getQuote,
  };
};

export default useQuotableServices;
