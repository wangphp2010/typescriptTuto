/* import request = require('request');

request('http://api.komavideo.com/news/list', function (error, response, body) {
    if (error){
        //console.log(error);
    }
    else {
        // console.log(body);
        var body = JSON.parse(body);
        for(var i = 0; i<body.length ; i++ )
        {
             
            //console.log(body[i].title) ;
        }
    } 


});
 */
/* function add2(...vals:number[]):number{
    let result = 0 ;
    for(let val of vals)
    {result +=val;}
    return result ; 
}

console.log(add2(1,2,3,4)) ;


  */

/*  class Person
 {
     private name:string;
     public sex:number;
 
     constructor(name:string , sex:number)
     {
         this.name = name ;
         this.sex = sex ;
     }
 
     sayhello()
     {
         console.log( `${this.name} ,  ${this.sex} , 你好` );
     }
     
 }
 let person = new Person("小马" , 1 );
 person.sayhello() ; 
 
 console.log( person.name )    ;

 console.log( person.sex )    ; */


class Data {
    private dbname: string;

    constructor(dbname: string) { this.dbname = dbname; }

    name():string{
        return this.dbname ; 
    }


}

let db = new Data(" mon agence ") ;
console.log(db.name);