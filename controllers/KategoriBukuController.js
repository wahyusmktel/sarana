const KategoriBuku = require('../models/KategoriBuku');

class KategoriBukuController {
  static async create(req, res) {
    try {
      const data = req.body;
      const result = await KategoriBuku.create(data);
      res.status(201).json(result[0]);
    } catch (error) {
      res.status(500).json({ message: 'Error creating data', error });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const result = await KategoriBuku.update(id, data);
      res.status(200).json(result[0]);
    } catch (error) {
      res.status(500).json({ message: 'Error updating data', error });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await KategoriBuku.delete(id);
      res.status(200).json({ message: 'Data successfully deleted' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting data', error });
    }
  }

  static async findAll(req, res) {
    try {
      const page = req.query.page || 1;
      const data = await KategoriBuku.findAll(page);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving data', error });
    }
  }

  static async search(req, res) {
    try {
      const query = req.query.q;
      const data = await KategoriBuku.search(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error searching data', error });
    }
  }
}

module.exports = KategoriBukuController;
