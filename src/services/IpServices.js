import axios from 'axios';

const useIpServices = () => {
  const _apiBase = 'http://ip-api.com/json/';

  const getLocation = async () => {
    try {
      const response = await axios.get(_apiBase);
      const { city, countryCode, timezone } = response.data;
      return { city, countryCode, timezone };
    } catch (error) {
      console.error(error);
      return { city: '', countryCode: '', timezone: '' };
    }
  };

  return {
    getLocation,
  };
};

export default useIpServices;
