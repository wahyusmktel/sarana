const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jenisPrasaranaRoutes = require('./routes/jenisPrasaranaRoutes');
const tanahBangunanRoutes = require('./routes/tanahBangunanRoutes');
const jenisPrasaranaBangunanRoutes = require('./routes/jenisPrasaranaBangunanRoutes');
const bangunanRoutes = require('./routes/bangunanRoutes');
const kategoriRuangRoutes = require('./routes/kategoriRuangRoutes');
const ruangRoutes = require('./routes/ruangRoutes');
const tahunPelajaranRoutes = require('./routes/tahunPelajaranRoutes');
const kondisiRuangRoutes = require('./routes/kondisiRuangRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use('/api/items', require('./routes/items'));
app.use('/api/jenis_prasarana', jenisPrasaranaRoutes);
app.use('/api/tanah_bangunan', tanahBangunanRoutes);
app.use('/api/jenis_prasarana_bangunan', jenisPrasaranaBangunanRoutes);
app.use('/api/bangunan', bangunanRoutes);
app.use('/api/kategori_ruang', kategoriRuangRoutes);
app.use('/api/ruang', ruangRoutes);
app.use('/api/tahun_pelajaran', tahunPelajaranRoutes);
app.use('/api/kondisi_ruang', kondisiRuangRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
