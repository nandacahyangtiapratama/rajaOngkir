const axios = require('axios')

axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = process.env.RAJAONGKIR_API
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


class RajaOngkir {
  async getProvince() {
    try {
      const getDataProvince = await axios.get('/province')
      return getDataProvince
    } catch (error) {
      return error
    }
  }

  async getCity(province_id) {
    try {
      const getDataCity = await axios.get(`/city?province=${province_id}`)
      return getDataCity
    } catch (error) {
      return error
    }
  }

  async getCost(city_id) {
    try {
      const getDataCost = await axios.post('/cost', {
        origin: 468,
        destination: city_id,
        weight: 1000,
        courier: "pos"
      })
      return getDataCost
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = RajaOngkir;