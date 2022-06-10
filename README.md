# Vue 3 + TypeScript + Vite

## Vue3 项目模板

### 开发工具
- VSCode + Volar
### 开发环境
- nodejs、yarn
### 集成说明
- 技术栈：vue 3.x、vite 2.x、pinia 2.x、Vue Router 4.x、TypeScript 等
- 代码风格检查约束：ESLint + Prettier、husky + lint-staged
- 环境相关配置
- 浏览器兼容性
- ...

## 代码风格约束
### 配置 ESLint

相关插件：

- `eslint`
- `eslint-plugin-vue`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`

```
yarn add eslint --dev
yarn add eslint-plugin-vue --dev
yarn add @typescript-eslint/eslint-plugin --dev
yarn add @typescript-eslint/parser --dev
```

### 配置 Prettier

#### 相关插件：
- prettier
- eslint-plugin-prettier
- eslint-config-prettier

```
yarn add prettier --dev
yarn add eslint-plugin-prettier --dev
```
#### 解决 prettier 与 eslint 冲突的规则
> 安装 eslint-config-prettier 插件，该插件可以禁用 prettier 与 eslint 冲突的相关规则
> 参考 [eslint-plugin-prettier Recommended Configuration](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)

```
yarn add eslint-config-prettier --dev
```

### 配置 git commit 时检查
`husky` + `lint-staged`
参考: [lint-staged Installation and setup](https://www.npmjs.com/package/lint-staged)
husky：它的主要作用就是关联git的钩子函数，在执行相关git hooks时进行自定义操作，比如在提交前执行eslint校验，提交时校验commit message等等。
lint-staged: 对暂存的 git 文件运行检测

直接运行命令，会生成一个 .husky 文件夹，会在package.json 文件 sciprts 添加一条 “prepare” 命令和 “lint-staged” 配置项
```
npx mrm@2 lint-staged
```

### 配置环境变量
加载的环境变量暴露 import.meta.env 对象上; [vite官方文档-环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html)