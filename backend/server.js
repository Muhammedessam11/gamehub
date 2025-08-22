const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);

app.get('/', (req,res)=>res.send('GameHub Backend Running!'));
app.get('/api/health', (req,res)=>res.json({status:'ok'}));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Backend running on port ${PORT}`));
