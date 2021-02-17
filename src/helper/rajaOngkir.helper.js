const axios = require('axios')

axios.defaults.baseURL = 'https://api.rajaongkir.com/starter'
axios.defaults.headers.common['key'] = 'a08499b15e43410370e0d9cd4652d4f6'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


class RajaOngkir{
  async getProvince(req, res){
    try{
      const provinceName = req.query;
      const getData = await axios.get('/province')
      res.status(200).json({
        mesasge: getData
      })
    }catch(error){
      console.log(error)
    }
  }
}

module.exports = RajaOngkir;