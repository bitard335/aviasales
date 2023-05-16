class AviaSalesAPI {
  url = 'https://aviasales-test-api.kata.academy';

  getSearchId = async () => {
    try {
      const path = this.url + '/search';

      const response = await fetch(path);
      const json = await response.json();

      if (!response.ok) throw new Error();

      return json.searchId;
    } catch (err) {
      throw new Error('Ошибка SearchId ', err.status);
    }
  };
  getTickets = async (searchId) => {
    try {
      const path = this.url + '/tickets?' + new URLSearchParams({ searchId });

      const response = await fetch(path);
      const json = await response.json();

      if (!response.ok) throw new Error();

      return json;
    } catch (err) {
      throw new Error('Ошибка получения билетов ', err.message);
    }
  };
}

export const aviaSalesAPI = new AviaSalesAPI();
