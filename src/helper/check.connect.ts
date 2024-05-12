import mongoose from 'mongoose';
import os from 'os';
import process from 'process';

const _SECOND = 5000;
// count connect database
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

//  check over load
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    const maxConnection = numCore * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory Usage: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnection > maxConnection) {
      console.log('Connection  Overload Detected');
    }
  }, _SECOND);
};

export default {
  countConnect,
  checkOverLoad
};
