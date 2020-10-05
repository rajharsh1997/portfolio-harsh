const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BASE_URL': prod ? 'https://portfolio-harsh-api.herokuapp.com' : 'http://localhost:3000',
  'process.env.NAMESPACE': 'https://portfolio-harsh-api.herokuapp.com',
  'process.env.CLIENT_ID': 'y2ffldkSnmvz9XpjOvt5TVW4s5PGoDSa'
}
