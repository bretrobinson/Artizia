module.exports={
    host: 'craftdbinstance.c0rix1pv1sam.us-west-2.rds.amazonaws.com',
    user: 'matrixroot',
    password: 'RF8p8vlVP48glnvKNJGa',
    database: 'CraftDb',
    port:3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  jwt:'MY_SECRETE_KEY'
}