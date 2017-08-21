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

## Mock 数据

`src/www/mock` 文件内存放 mock 数据

## pre-commit

添加了 git pre-commit 指令，执行 lint 脚本操作
