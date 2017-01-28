var mysql = require('mysql');

/*var connection = mysql.createConnection({
   host: 'localhost',
   user: 'ulisesr',
   password: 'secret',
   database: 'db_users',
   port: 3306
});
*/

// *** SELECT ************************************
exports.select_bd = function(user_email, user_pass) {

   var connection = mysql.createConnection({
      host: 'localhost',
      user: 'ulisesr',
      password: 'secret',
      database: 'db_users',
      port: 3306
   });

   var compara = '2';

   var sql = "SELECT * FROM ?? WHERE ?? = ?";

   var inserts = ['users', 'email', user_email]; 
   sql = mysql.format(sql, inserts);

   connection.query(sql, function (error, results, fields) {
      if (error) throw error;
      // *************************
      if (results[0].pass === user_pass){
         console.log('clave coincide');
         compara = '1' ;
      } else {
         console.log('clave NO coincide');
         compara = '0' ;
      }
      // *************************
      console.log('var en query', compara);
      console.log('La solución es: ', results[0].pass);
       
     
   });
   connection.end();
   console.log('var en return', compara);
   return compara ;
}

// ***********************************************
//exports.select_bd = select_bd ;
