# Getting Started

## Installation
```bash
composer create-project laraquasar/laraquasar
```

install all composer package
```bash
cd laraquasar
composer install
```


Install all node_modules packages using the package manager that you like, here I recommend using PNPM


::: code-group

```bash [pnpm]
 pnpm install
 ```

```bash [npm]
 npm install
 ```

```bash [yarn]
 yarn
 ```

:::

## Usage
### Dev
Open 2 terminals, one to run a laravel and one to run Vite
``` bash
 php artisan serve
 ```


::: code-group

```bash [pnpm]
 pnpm dev
 ```

```bash [npm]
 npm run dev
 ```

```bash [yarn]
 yarn dev
 ```

:::
### Production

see: https://laravel.com/docs/10.x/deployment for see laravel deployment tips



#### build fontend


::: code-group

```bash [pnpm]
 pnpm build
 ```

```bash [npm]
 npm run build
 ```

```bash [yarn]
 yarn build
 ```

:::
