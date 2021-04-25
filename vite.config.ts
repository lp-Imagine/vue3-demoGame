// import path from 'path';

// const pathResolve = (pathStr: string) => {
//   return path.pathResolve(__dirname, pathStr);
// };

// const config = {
//   base: './', // 在生产服务中的基本公共路径 @defalut /
//   alias: {
//     '/@/': pathResolve('./src')
//   },
//   outDir: 'dist', // 构建输出将放入其中， 如果目录存在， 它将在构建之前被删除 @default 'dist'
//   minify: 'esbuild', // 压缩
//   hostname: 'localhost', // ip地址
//   port: '8080', // 端口号
//   open: false, // 是否自动在浏览器打开
//   https: false, // 是否开启httpsn
//   ssr: false, // 是否服务端渲染
//   optimizeDeps: {
//     // 引入第三方配置
//     // include: ["moment", "echarts", "axios", "mockjs"]
//     include: ['axios']
//   },
//   proxy: {
//     // 配置代理
//     '/api': {
//       target: 'http://192.168.225:8080',
//       changeOrigin: true,
//       ws: true,
//       rewrite: (path: string) => {
//         path.replace(/^\/api/, '');
//       }
//     }
//   }
// };

// module.exports = config;

// import vue from '@vitejs/plugin-vue';

// /**
//  * @type {import('vite').UserConfig}
//  */
// export default {
//   // plugins: [vue()],
//   publicPath: '/',
//   build: {
//     base: './'
//   }
// };




import vue from '@vitejs/plugin-vue';
const path = require('path');

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {  

  alias: {
    /*
      路径别名
      若为文件系统路径必须是绝对路径的形式，否则将以别名原样呈现，不会解析为文件系统路径路径 
    */
    //'@': process.cwd()+'/src'
    //'@':path.resolve('src')
    //'@':path.resolve(__dirname, 'src')
    '@':path.resolve(__dirname, './src')
  },
  
  plugins: [vue()],

 
  /*
    Project root directory/项目根目录（index.html所在位置），可以是绝对路径，也可以是相对于本配置文件的路径。
    default：process.cwd() 返回 Node.js 进程的当前工作目录
  */
  //root:process.cwd(),

  /*
    Default: /
    Base public path (应用基础请求路径) when served in development or production. Valid values include:
    
    Absolute URL pathname, e.g. /foo/
    Full URL, e.g. https://foo.com/
    Empty string or ./ (for embedded deployment)
  */
  base:'/',

  /*
    Directory to serve as plain static assets. 
    Files in this directory are served at / during dev and copied to the root of outDir during build, and are always served or copied as-is without transform. 
    The value can be either an absolute file system path or a path relative to project root.
    静态资源目录，开发模式下会自动放到 / 下，生产模式下会自动放到 outDir 根路径下。
    该目录可以配置为文件系统绝对目录或者相对于项目根目录的相对路径
  */
  publicDir:'public',


  /*
    Default: 'development' for serve, 'production' for build
    Specifying this in config will override the default mode for both serve and build. This value can also be overridden via the command line --mode option.
  */
  //mode:'',

  //vite开发服务器配置
  server:{
    host:'localhost',
    port:3000,
    open:true,
    strictPort:false,//如果端口占用，是退出，还是尝试其他端口
    https: false,// 是否开启 https

    // 反向代理
    // proxy: {
    //   // string shorthand
    //   '/foo': 'http://localhost:4567/foo',
    //   // with options
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //   // with RegEx
    //   '^/fallback/.*': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/fallback/, '')
    //   }
    // }
  },
  
  //生产模式打包配置
  build:{
    outDir: 'dist',//Specify the output directory (relative to project root).
  }

}


