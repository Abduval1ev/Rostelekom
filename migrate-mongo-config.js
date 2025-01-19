require("dotenv").config()

const config = {
  mongodb: {
    url: "mongodb+srv://abduvaliev:28.09.2006.Mongoos@rostelecomorigindb.1qsvu.mongodb.net/rosttelecom?retryWrites=true&w=majority",

    databaseName: "rosttelecom",

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  migrationFileExtension: ".js",

  useFileHash: false,

  moduleSystem: "commonjs",
};

module.exports = config;
