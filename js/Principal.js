/* una discoteca desea llevar el control de sus ganancias
para esto conoce de cada rumbero:
 su cedula,
  nombre, 
  edad 
   sexo.
 cada entrada tiene un costo de 25 y si es chica cuesta 25% del valor del chico. 
 por noche, la discoteca desea saber
  a) pago de cada rumbero 
  b) total ganado 
  c) porcentaje de mayores a 21 años
   d) cual sexo asistio mas a la discoteca/*/
   
   import Cl_discoteca from "./Cl_discoteca.js";
   import Rumberos from "./Rumberos.js";
  // intanciar al objeto rumbero
  let rumbero1=new Rumberos(134,"luis",23,"m");      
  let rumbero2=new Rumberos(154,"ana",22,"f");      
  let rumbero3=new Rumberos(324,"jose",18,"m");
  let rumbero4=new Rumberos(286,"carmen",19,"f");
  
  let tododiscoteca=new Cl_discoteca(); 
  tododiscoteca.procesarrumbero(rumbero1);
  tododiscoteca.procesarrumbero(rumbero2);
  tododiscoteca.procesarrumbero(rumbero3);
  tododiscoteca.procesarrumbero(rumbero4);
 
  // salida de datos
  let salida=document.getElementById("resultados");
  salida.innerHTML+= "Resultados : <br>";
  salida.innerHTML+= "Pago que realiza Luis  "   +rumbero1.precioentrada()+"$ <br>";
  salida.innerHTML+= "Pago que realiza Ana     " +rumbero2.precioentrada() +"$ <br>";
  salida.innerHTML+= "Pago que realiza Jose    " +rumbero3.precioentrada()+"$ <br>";
  salida.innerHTML+= "Pago que realiza Carmen  " +rumbero4.precioentrada()+"$  <br><br>";
  salida.innerHTML+= " Total ganado : " +tododiscoteca.devolverganancias()+"$ <br>";
  salida.innerHTML+= " Porcentaje de rumberas mayores de 21 años : " +tododiscoteca.porcentajemayores()+"% <br>";
  salida.innerHTML+= " El sexo que mas asistido a la discoteca es: " +tododiscoteca.devolversexo();

