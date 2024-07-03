export default class Cl_discoteca {
    constructor (  ){ 
       this.acumganancia=0;
       this.contmayores=0;
       this.conth=0;
       this.contf=0;
       this.contrumberos=0;
   
    }
   
   //metodos
   procesarrumbero(ru){
   
       this.acumganancia=this.acumganancia+ru.precioentrada();  
   
       if(ru.edad>=21, ru.sexo=="f"){
           this.contmayores+=1;
       }
       if(ru.sexo=="m"){
           this.conth+=1;
       }
       if(ru.sexo=="f"){
           this.contf++;
       }
       this.contrumberos++;
    }
   
   porcentajemayores(){
       return (this.contmayores/this.contrumberos)*100;}
   devolversexo()
   {
     if (this.conth>this.contf){return "hombre"} if (this.conth<this.contf){return "mujer"}
     else {return "AMBOS POR IGUAL"}
   }
   devolverganancias(){
       return this.acumganancia;   }
   }
   
   