const TanahBangunan = require('../models/TanahBangunan');

class TanahBangunanController {

    //Create Data
    static async create(req, res) {
    try {
        const data = req.body;
        const result = await TanahBangunan.create(data);
        
        res.status(201).json(result[0]);
        } catch (error) {
        res.status(500).json({ message: 'Error adding data', error });
        }
    }

    //Update Data
    static async update(req, res) {
        try {
          const { id } = req.params;
          const data = req.body;
          const result = await TanahBangunan.update(id, data);
          
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
          const rowsDeleted = await TanahBangunan.delete(id);
          
          if (rowsDeleted === 0) {
            return res.status(404).json({ message: 'Data not found' });
          }
    
          res.status(200).json({ message: 'Data successfully deleted' });
        } catch (error) {
          res.status(500).json({ message: 'Error deleting data', error });
        }
    }

    //Show All Data
    static async findAll(req, res) {
        try {
          const page = parseInt(req.query.page) || 1;
          const data = await TanahBangunan.findAll(page);
          
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json({ message: 'Error retrieving data', error });
        }
    
    }

    //Search Data
    static async search(req, res) {
        try {
          const query = req.query.q;
          const data = await TanahBangunan.search(query);
          
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json({ message: 'Error searching data', error });
        }
    }

}

module.exports = TanahBangunanController;