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