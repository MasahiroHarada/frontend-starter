# フロントエンド開発の雛形プロジェクト
## 機能
- オートリロード（[browser-sync](https://www.browsersync.io/)）
- Sassの自動コンパイル
- [EJS](https://github.com/mde/ejs)の自動コンパイル

## はじめかた
### Gitをインストール
Macではすでにインストールされているかもしれません。  
入っていない場合は[こちら](https://git-scm.com/)からインストールしてください。
### Nodeをインストール
[ここ](https://nodejs.org/ja/)からLTS版をインストールしてください。
### yarnをインストール
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
npm run dev
```

## 利用できるnpmコマンド
### dev
```
npm run dev
```
scssおよびejsファイルをコンパイルして開発用サーバーを立ち上げます。  
scssファイルおよびejsファイルを監視し、変更があった場合は自動的にブラウザをリロードします。
### build
```
npm run build
```
scssおよびejsファイルをコンパイルします。
### sass
```
npm run sass
```
scssファイルをコンパイルします。
### ejs
```
npm run ejs
```
ejsファイルをコンパイルします。

## 設定
### config.js
TODO
```js
export default {
  dir: {
    public: {
      base: 'public',
      styles: 'styles'
    },
    source: {
      base: 'src',
      scss: 'scss',
      templates: 'templates'
    }
  },
  sass: {
    // =====================================================
    // Sass Output Style
    // nested / compact / expanded / compressed
    // https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
    // =====================================================
    outputStyle: 'compact'
  }
};
```
### tampletes/vars.json
TODO
```json
{
  "message": "Hello world."
}
```

## 参考リンク
- [テンプレートエンジン「EJS」とタスクランナー「Gulp.js」で爆速HTMLコーディング](https://liginc.co.jp/web/html-css/html/144170)
