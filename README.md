# Frontend starter
## :innocent: 機能
フロントエンド開発の雛形プロジェクトです。
- オートリロード（[browser-sync](https://www.browsersync.io/)）
- Sassの自動コンパイル
- [EJS](https://github.com/mde/ejs)の自動コンパイル

## :rocket: はじめかた
### システム要件
以下のプログラムがインストールされている必要があります。
#### Git
Macではすでにインストールされているかもしれません。  
入っていない場合は[こちら](https://git-scm.com/)からインストールしてください。
#### Node
[ここ](https://nodejs.org/ja/)からLTS版をインストールしてください。
#### yarn
JavaScript用のパッケージマネージャです。  
下記のコマンドを実行してインストールしてください。
```
npm install -g yarn
```
### 雛形プロジェクトをダウンロード
```
git clone git@github.com:MasahiroHarada/frontend-starter.git <プロジェクト名>
cd <プロジェクト名>
rm -rf .git
yarn install
```

## :bulb: 開発フロー
### 概要
プロジェクトのルートディレクトリで、まずは下記のコマンドを実行してください。
```
npm run dev
```
このコマンドでGulpのタスクが実行されます。

何が起きるかというと、
1. scssファイルのコンパイル
1. ejsファイルのコンパイル
1. 開発用サーバー起動

監視モードになるので、ファイルに変更を加えると  
自動的にコンパイル → ブラウザリロードが行われます。

コンパイルだけしたい場合は、下記のコマンドを実行してください。
```
npm run build
```
### Sass
#### 開発ディレクトリ
<プロジェクトディレクトリ>/src/scss
#### コンパイル先
<プロジェクトディレクトリ>/public/styles
### EJS
#### 開発ディレクトリ
<プロジェクトディレクトリ>/src/templates
#### コンパイル先
<プロジェクトディレクトリ>/public
#### EJSを使わない場合
templatesディレクトリの中身を全て削除し、publicディレクトリ内にHTMLを書いてください。

## :wrench: 設定
### config.js
コンパイルにまつわる設計項目です。
### tampletes/vars.json
EJSで使用する変数はこのファイルに記載してください。

## :earth_asia: 参考リンク
- [テンプレートエンジン「EJS」とタスクランナー「Gulp.js」で爆速HTMLコーディング](https://liginc.co.jp/web/html-css/html/144170)

## :apple: 検証環境
macOS Sierra ver.10.12.6
