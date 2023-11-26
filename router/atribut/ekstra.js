const nyobaModel = require('../../models/ekstra'); // Ganti nama variabel menjadi 'uasModel'

module.exports = {
  index: async (req, res) => {
    try {
      const nyobaData = await nyobaModel.find(); // Ganti nama variabel menjadi 'uasData'
      if (nyobaData.length > 0) {
        res.status(200).json({
          status: true,
          data: nyobaData,
          method: req.method,
          url: req.url
        });
      } else {
        res.status(404).json({ success: false, message: 'Tidak ada data pengguna' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Terjadi kesalahan' });
    }
  },

  show: async (req, res) => {
    try {
      const nyobaData = await nyobaModel.findById(req.params.id); // Ganti nama variabel menjadi 'uasData'
      res.json({
        status: true,
        data: nyobaData,
        method: req.method,  
        url: req.url,
        message: "Data berhasil didapatkan"
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  store: async (req, res) => {
    try {
      const result = await nyobaModel.create(req.body);
      res.status(200).json({
        status: true,
        data: result, // Ganti nama variabel menjadi 'result'
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan"
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const nyobaData = await nyobaModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.json({
        status: true,
        data: nyobaData,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      await nyobaModel.findByIdAndDelete(req.params.id);
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
};
