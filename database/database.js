  const express = require('express');
  const { Pool } = require('pg');
  
 
  
  // Configuración de la conexión a la base de datos
  const dbConfig = {
  host: '157.90.89.102',
  user: 'sarchese_api',
  password: 'Sarche2022.',
  database: 'sarchese_rrhh',
  port: 5432, 
  };
   //const dbConfig = {
    //host: 'localhost',
    //user: 'root',
    //password: '.',
    //database: 'sarcheservice_rrhh',
    //port: 3306, // El puerto por defecto de PostgreSQL es 5432
    //};
  
  // Crear un pool de conexiones
   const pool = new Pool(dbConfig);

  module.exports ={
    pool
  }