指令
===
	$ npm install -g typescript 安装 typescript 编译器 没有写-g会安装到本地文件夹
	
	$ npm bin -g 查看安装目录
	
	$ tsc --outDir dist hw.ts 把hw.ts编译到dist文件夹
	$ tsc --outDir dist .src/hw.ts
	
	$ tsc init 会创建设置文件 tscofig.json
		修改   
			"outDir": "./dist",       //默认输出js的文件夹            
			"rootDir": "./src",		// 默认的源文件夹
		修改完  敲$ tsc  会编译src下的文件到dist
			
	$ tsc -w 开启 动态侦测 ,每当修改完.ts文件 ,系统会自动编译成js		

## 变量使用前要定义
    ~~~js

    let/var myname:string = 'jim' ;

    ~~~

    ## 变量类型

    + number
    + string
    + boolean
    + symbol 标识唯一对象
    + any: 任意类型
    + object (数组,元组,类,接口,函数等)
    + string | boolean | number...联合类型


## var和let的区别
===================
    ~~~js
        if(true)
        {
            var myname:string = "koma" ; // var 定义非私有变量 ,let 定义私有变量(只在花括号里)
        }
        console.log('helo ${myname} ') ;


        var myname:string = "koma" ;
        var myname:string = "xiaoma" ; 
        // var 同一变量可以被重新定义
        // let 定的变量不可以被重新定义
    ~~~

## 常量
    ===============
    ~~~js
    
    const DBSTR:string = "ip=192.2.2.1;port=20;uid=xiaoma;pwd=12465" ;

    const DATA:number[] = [100 ,200,300] ;
    
    DATA = [10 ,20,30]  //报错

    //不会报错
    DATA[0] = 10 ;
    DATA[1] = 20 ;
    DATA[2] = 20 ;

    // 增加数组元素 不会报错
    DATA[4] = 20 ;

    ~~~


## 数组
======

~~~js
//数组定义
let data:string[] = ['java' , 'ruby','kotlin','dart' ]

//添加赋值
data[4] = 'PHP' ;

//越界赋值
data[10] = 'OO' ; // 结果数组 5-9会是空元素


~~~~

多维数组
==========
~~~js

let data:number[][] =[
                        [1,2,3] ,
                        [10,20,30],
                        [100,200,300],
                      ] ;
~~~


枚举类型
==============
enum name{ name1, name2 , name3 ... } //里面都是常量


~~~js
    enum Sec{
        MALE,
        FEMALE,
        UNKNONW
    }
    Let memberSex:Sex = Sex.FEMALE ;
    console.log(memberSex) //输入 1 数字类型
    console.log(Sex[memberSex]) //输入 FEMALE
    
    // 应用
        switch(+memberSex )//加写+为报错 写加 其实是把memberSex当成数字类型
        {
            case Sex.MALE:
                console.log('男');
                break;
        
            case Sex.FEMALE:
                console.log('女');
                break;
                
            case Sex.UNKNOW:
                console.log('未知');
                break;
                
        }

       function checkSex(sex:Sex )
       {
            switch(sex ) 
            {
                case Sex.MALE:
                    console.log('男');
                    break;
            
                case Sex.FEMALE:
                    console.log('女');
                    break;
                    
                case Sex.UNKNOW:
                    console.log('未知');
                    break;
                    
            }
       } 


~~~ 


联合类型
===============
~~~js
    let data:string | boolean | number .... 
~~~


空检查
=============
~~~js
    let data1:string = undefined ;
    let data2:string = null ;
    let data3:string = "" ;
    data3 = null ;
~~~


第三方库
===========
    ~~~bash
        npm init //建node.js工程
        npm install --save request //安装request库,作用时读取其他网页内容
    

    ~~~
    建立main.js
        $ node main.js

   ## typescript中的使用方法
     
        1.找到tsd文件 #tsd 是用来编译ts文件用的,运行的是编译后的 js文件
        2.导入tsd文件
        3.编写代码
        4.编译运行

    ### 找到tsd文件
        https://microsoft.github.io/TypeSearch/   注意大小写 否则打不开
        方法:在这个网址中输入 request  会找到安装代码
    
    ### 导入tsd文件
        $ npm install --save @types/request //刚刚找到的安装代码  

    ### 编写代码
            test.ts
            ~~~js
                    import request = require('request');

                    request('http://api.komavideo.com/news/list', function (error, response, body) {
                        if (error)
                            console.log(error);
                        else {
                            // console.log(body);
                            var body = JSON.parse(body);
                            for(var i = 0; i<body.length ; i++ )
                            {
                                
                                console.log(body[i].title) ;
                            }
                        } 


                    });
            ~~~
        
### 编译运行  tsc test.ts  



## 函数的使用
    ===============
    ~~~js
    function Fname(param1:type ....  ):return_type{}
    
    function add(x:number,y:number):number{ return x+y ; }

    let func_add = add ; // 把函数赋值给变量 这个变量也是函数了
    ~~~


## 箭头函数
    =========
        ### 函数的定义
        ~~~js
        (param:type,....):return_type => { }
        ~~~
        ### 使用
        ~~~js
          (x:number,y:number):number =>{return x * y ; }

        let func_add = (x:number,y:number):number =>{return x+y ; }
        ~~~


##可省略参数 
?:
~~~js
//加问号
function sayHello(name?: string):string{
    if(name === undefined)
    return "hello koma ";
    else 
    return "hello " + name  ; 
}
// 或者 提供默认值
function sayHello(name : string  = "koma"):string{
    
    return "hello " + name  ; 
}
~~~

## 定义参数个数不确定的函数

~~~js
// 参数必须是数组类型
function add2(...vals:number[]):number{
    let result = 0 ;
    for(let val of vals)
    {result +=val;}
    return result ; 
}
console.log(add2(1,2,3,4))
~~~

## 类的定义 使用

~~~js
//定义
class classname
{
    property_name1:type;
    property_name2:type;

    constructor(param1.....){}

    method1(param1):return_type{}
    method2(param1):return_type{}
    
}
//实例1
class Person
{
    private name:string; //本类访问
     public sex:number; //共有访问
      age:number ; // 默认是public 
      protected add:string // 本类和子类访问

    constructor(name:string , sex:number)
    {
        this.name = name ;
        this.sex = sex ;
    }

    sayhello()
    {
        console.log( `${this.name} , 你好` );
    }
    
}
let person = new Person("小马" , 1 );
 person.sayhello() ; 
 
 console.log( person.name )    ;

 console.log( person.sex )    ;


//实例2
class Database
{
    public dbname1:string ;
    private dbname2:string ;
    protected dbname3:string ;

    constructor(dbname:string)
    {
        this.dbname = dbname ;
    }

    get name():string  // 编译时要加--target es5:  $ tsc test.ts --target es5 .使用方法: 当变量使用而不是当方法使用
    {
        return this.dbname2;
    }
    set name(val:string)
    {
        this.dbname2 = val ;
    }

    // 外部调用
    public  showDb()
    {
        console.log( `数据库: ${this.dbname1}`) ;
    }
    //子类本类 内部调用
    protected  connect()
    {
        console.log( ` ${this.dbname3} ` , " 连接中.... ") ;

    }

  //本类 内部调用
    private  connect()
    {
        console.log( ` ${this.dbname2} ` , " 关闭 ") ;

    }

}


class PostgreSql extends Database
{
    public do()
    {
        super.connect() ; // super.connect() 表示自己父类的
    }

}

let db = new Database("Oracle甲骨文");

console.log(db.name) //注意这里没有括号
db.name = "nini " ;
console.log(db.name) //注意这里没有括号

~~~

类的静态成员
=======

类的静态成员指不用实例化就能够访问或使用的属性或方法 加 static 
用法 Database.dbname = "fff"; console.log(Database.dbname) ; Database.connect();


命名空间
=======

### 命名空间定义方法
~~~js
//定义方法
namespace ns_name{
    export class class_name{}
    export function func_name{}
    export namespace ns_name{}
}
~~~

### 命名空间使用方法

~~~js
namespace com.kkvideo{

    // 导出类
    export class Kuser{
        constructor(){}
   
        sayhello()
        {
            console.log("hi . hello ");
        }
     }
    //导出函数
    export function showVs{
        console.log("Version 1.2.63 ");

    }
    //嵌套子命名空间
    export namespace util{

        export class mydatabasse{
            private dbname:string ;
                constructor(dbname:string){
                    this.dbname = dbname;

                }

                showme()
                {
                    console.log( this.dbname + " show show ");
                }
            }


        
    }
 
}

let  user = new com.kkvideo.Kuser();
user.sayhello();

com.kkvideo.showVs();

let db = new com.kkvideo.util.mydatabasse("mysql");

db.showme();

~~~

