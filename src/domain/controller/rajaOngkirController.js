const rajaOngkirUseCase = require('../useCase/rajaOngkirUseCase')

class RajaOngkirController {
  async getDataProvince(req, res) {
    try {
      const { provinceName, cityName } = req.body;
      const rajaOngkirUseCaseInit = new rajaOngkirUseCase();
      const data = await rajaOngkirUseCaseInit.getDataProvince(provinceName, cityName)
      res.status(200).json({
        message: data
      })
    } catch (error) {
      res.status(400).json({
        message: error
      })
    }
  }
}

module.exports = RajaOngkirController;