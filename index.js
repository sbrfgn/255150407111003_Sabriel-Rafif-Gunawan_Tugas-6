const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let databaseTabel = [
  { id: 1, nama: 'Data Pertama', deskripsi: 'Ini adalah data awal' }
];

app.get('/api/data', (req, res) => {
  res.status(200).json({
    success: true,
    data: databaseTabel
  });
});

app.post('/api/data', (req, res) => {
  const { nama, deskripsi } = req.body;
  
  const dataBaru = {
    id: databaseTabel.length > 0 ? databaseTabel[databaseTabel.length - 1].id + 1 : 1,
    nama: nama,
    deskripsi: deskripsi
  };

  databaseTabel.push(dataBaru);

  res.status(201).json({
    success: true,
    data: dataBaru
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});