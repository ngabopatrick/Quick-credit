import user from './routes/user';
import express from 'express';
import bodyParser from 'body-parser';
import loan from './routes/loan';
import repayment from './routes/repayment';

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(user);
app.use(loan);
app.use(repayment);
app.use('*', (req, res) => res.status(404).send({
    status: 404,
    message: 'URL NOT FOUND',
  }));
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

export default app;