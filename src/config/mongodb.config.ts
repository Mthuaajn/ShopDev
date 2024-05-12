const configDev = {
  db: {
    host: 'localhost',
    port: 27017,
    name: 'dbDEV'
  },
  app: {
    port: 4000
  }
};

const configPro = {
  db: {
    host: 'localhost',
    port: 27017,
    name: 'dbPRO'
  },
  app: {
    port: 3000
  }
};

const config: any = { configDev, configPro };
const env = process.env.NODE_ENV || 'dev';
export default config[env];
