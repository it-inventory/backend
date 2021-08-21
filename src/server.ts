import express from 'express';
import morgan from 'morgan';

const app = express();

app.listen(3333, () => { 
  console.log('🎲 Ouvindo na porta 3333')
})