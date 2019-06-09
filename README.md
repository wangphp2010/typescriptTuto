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


    ##var和let的区别
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

    常量
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

数组
=============
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


