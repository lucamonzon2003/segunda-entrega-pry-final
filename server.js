import app from './src/app.js';
import CRUD from './src/common/config/mongo.js'

const PORT = process.env.PORT

CRUD()

app.listen(PORT, () => console.info(`Server up and running on port ${PORT}`));