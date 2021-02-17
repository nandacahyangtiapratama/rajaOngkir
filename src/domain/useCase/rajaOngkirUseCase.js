const rajaOngkirHelper = require('../../helper/rajaOngkirHelper')

class RajaOngkirUseCase {
  async getDataProvince(provinceName, cityName) {
    try {
      const rajaOngkirHelperInit = new rajaOngkirHelper();
      const data = await rajaOngkirHelperInit.getProvince();
      const arrayKey = Object.keys(data.data.rajaongkir.results).length;
      for (let i = 0; i < arrayKey; i++) {
        if (provinceName.toLowerCase() == data.data.rajaongkir.results[i].province.toLowerCase()) {
          const dataCity = await rajaOngkirHelperInit.getCity(data.data.rajaongkir.results[i].province_id)
          const arrayKey1 = Object.keys(dataCity.data.rajaongkir.results).length;
          for (let v = 0; v < arrayKey1; v++) {
            if (cityName.toLowerCase() == dataCity.data.rajaongkir.results[v].city_name.toLowerCase()) {
              const dataCost = await rajaOngkirHelperInit.getCost(dataCity.data.rajaongkir.results[v].city_id)
              return dataCost.data.rajaongkir
            }
          }
        }
      }
      return "Data Not Found"
    } catch (error) {
      return error
    }
  }
}

module.exports = RajaOngkirUseCase;