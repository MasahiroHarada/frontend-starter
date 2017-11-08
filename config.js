export default {
  dir: {
    public: {
      // コンパイル先のルートディレクトリ名
      // このディレクトリ配下が開発サーバーでの公開対象
      base: 'public',
      // Sassのコンパイル先ディレクトリ名
      styles: 'styles'
    },
    source: {
      // 作業ディレクトリ名
      base: 'src',
      // Sassの作業ディレクトリ名
      scss: 'scss',
      // EJSの作業ディレクトリ名
      templates: 'templates'
    }
  },
  sass: {
    // =====================================================
    // Sassの出力設定です。
    // 以下のいずれかを設定できます。
    // nested / compact / expanded / compressed
    // それぞれの設定の詳細については下記のリンクを参照してください。
    // https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
    // =====================================================
    outputStyle: 'compact'
  }
};
