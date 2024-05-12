import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import helper from '../helper/check.connect';

class Database {
  private static instance: Database = null as any;
  private connectString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mcquhc2.mongodb.net/?retryWrites=true&w=majority&appName=ShopDev`;
  constructor() {
    // this.connect();
  }
  public connect(type = 'mongodb'): void {
    mongoose
      .connect(this.connectString, {
        maxPoolSize: 5 // cho 5 kết nối cùng lúc nếu có thằn thứ 6 vào thì sẽ đợi cho thằn thứ 5 đóng kết nối
      })
      .then(() => {
        helper.countConnect();
        console.log('Database connected');
      })
      .catch((error) => {
        console.log('Database connection error', error);
      });
  }
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
export default instanceMongodb;
