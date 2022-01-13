import HttpClient from './utils/HttpClient';

class UsersService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listUsers(orderBy = 'asc') {
    return this.httpClient.get(`/clients?orderBy=${orderBy}`);
  }
}

export default new UsersService();
