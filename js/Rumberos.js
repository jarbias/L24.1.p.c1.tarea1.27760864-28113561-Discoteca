export default class Rumberos {
    constructor (c,n,ed,s){
     this.cedula;
        this.nombre=n;
        this.edad=ed;
        this.sexo=s;
    
    }
    //metodos 

    set cedula(c){
        this._cedula=c;
    }

    /**
     * Set the cedula value.
     * @param {*} c - The cedula value.
     */
    set cedula(c){
        // Set the private _cedula property to the provided value.
        this._cedula = c;
    }

    /**
     * Get the cedula value.
     * @return {*} The cedula value.
     */
    get cedula(){
        // Return the value of the private _cedula property.
        return this._cedula;
    }

     set nombre(n){
    this._nombre=n;
}    
get nombre(){
    return this._nombre;
}   
set edad(ed){           
    this._edad=ed;
}
get edad(){
    return this._edad;
}
set sexo(s){
    this._sexo=s;
}
get sexo(){
    return this._sexo;
}
    precioentrada(){ if (this.sexo=="m"){ return 25; }
    else { return 25*0.25; }   }
   
}