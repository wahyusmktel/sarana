require('dotenv').config();

const authController = require('./controllers/authController');
const { authenticate } = require('./middleware/auth');
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
const jenisAlatRoutes = require('./routes/jenisAlatRoutes');
const asetAlatRoutes = require('./routes/asetAlatRoutes');
const kategoriAlatRoutes = require('./routes/kategoriAlatRoutes');
const jenisSaranaAngkutanRoutes = require('./routes/jenisSaranaAngkutanRoutes');
const angkutanRoutes = require('./routes/angkutanRoutes');
const kategoriBukuRoutes = require('./routes/kategoriBukuRoutes');
const bukuRoutes = require('./routes/bukuRoutes');
const penerbitBukuRoutes = require('./routes/penerbitBukuRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use('/api/items', require('./routes/items'));
app.post('/api/login', authController.loginUser);
app.use('/api/users', userRoutes);
app.use(authenticate);
app.use('/api/jenis_prasarana', jenisPrasaranaRoutes);
app.use('/api/tanah_bangunan', tanahBangunanRoutes);
app.use('/api/jenis_prasarana_bangunan', jenisPrasaranaBangunanRoutes);
app.use('/api/bangunan', bangunanRoutes);
app.use('/api/kategori_ruang', kategoriRuangRoutes);
app.use('/api/ruang', ruangRoutes);
app.use('/api/tahun_pelajaran', tahunPelajaranRoutes);
app.use('/api/kondisi_ruang', kondisiRuangRoutes);
app.use('/api/jenis_alat', jenisAlatRoutes);
app.use('/api/aset_alat', asetAlatRoutes);
app.use('/api/kategori_alat', kategoriAlatRoutes);
app.use('/api/jenis_sarana_angkutan', jenisSaranaAngkutanRoutes);
app.use('/api/angkutan', angkutanRoutes);
app.use('/api/kategori_buku', kategoriBukuRoutes);
app.use('/api/buku', bukuRoutes);
app.use('/api/penerbit_buku', penerbitBukuRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
