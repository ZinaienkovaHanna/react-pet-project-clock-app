import axios from 'axios';

const useIpServices = () => {
  const _apiBase = 'https://ipapi.co/json/';

  const getLocation = async () => {
    try {
      const response = await axios.get(_apiBase);
      const { city, country_code, timezone } = response.data;
      return { city, country_code, timezone };
    } catch (error) {
      console.error(error);
      return { city: '', country_code: '', timezone: '' };
    }
  };

  return {
    getLocation,
  };
};

export default useIpServices;
