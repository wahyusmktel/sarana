const JenisPrasarana = require('../models/JenisPrasarana');

class JenisPrasaranaController {

  //Show All Data
  static async findAll(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const data = await JenisPrasarana.findAll(page);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data', error });
    }
  }

  //Search Data
  static async search(req, res) {
    try {
      const query = req.query.q;
      const data = await JenisPrasarana.search(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error searching data', error });
    }
  }

  //Create Data
  static async create(req, res) {
    try {
      const { nama_jenis_prasarana, status } = req.body;
      const result = await JenisPrasarana.create({ nama_jenis_prasarana, status });
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: 'Error adding data', error });
    }
  }

  //Update Data
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nama_jenis_prasarana, status } = req.body;
      const result = await JenisPrasarana.update(id, { nama_jenis_prasarana, status });
      
      if (result.length === 0) {
        return res.status(404).json({ message: 'Data not found' });
      }

      res.status(200).json(result[0]);
    } catch (error) {
      res.status(500).json({ message: 'Error updating data', error });
    }
  }

  //Delete Data
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const rowsDeleted = await JenisPrasarana.delete(id);

      if (rowsDeleted === 0) {
        return res.status(404).json({ message: 'Data not found' });
      }

      res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting data', error });
    }
  }

}

module.exports = JenisPrasaranaController;
