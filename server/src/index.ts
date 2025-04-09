import app from './app';
import sequelize from './models/db';
import './models/User';
import './models/Excursion';

const PORT = process.env.PORT || 3001;

sequelize.sync({ alter: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Failed to connect to DB:', err));