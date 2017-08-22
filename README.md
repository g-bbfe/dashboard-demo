# dashboard-demo

> A starter kit for dashboard-demo

*If you are familiar with [cooking](https://github.com/elemefe/cooking), [here](https://github.com/ElementUI/element-cooking-starter) is a starter generated with it*

*此工程是在ElementUI上快速建立的，旨在建设一个基础的demo dashboard

## Environment

`Node >= 6`

## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
yarn
// else
npm install
```

## Scripts

``` bash
"scripts": {
  "dev": "node build/dev-server.js",
  "start": "node build/dev-server.js",
  "build": "node build/build.js",
  "lint": "eslint --fix --ext .js,.vue src"
},
```

npm run build 可以指定版本号，例如 --tag v0.1 ，会在 dist 目录下生成该版本号文件夹，默认为 latest

不过还是建议每个发布版本打一个 tag ，传到项目目录，防止丢失某版本源文件

## Mock 数据

`src/www/mock` 文件内存放 mock 数据

## pre-commit

添加了 git pre-commit 指令，执行 lint 脚本操作
