import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI no está definido en las variables de entorno');
    }

    await mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error('Error al conectar con MONGODB', err);
    process.exit(1);
  }
};

export default connectDB;
