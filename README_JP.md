# Ventriloquy

「Ventriloquy」は辞書ベースの標準出力用ライブラリです。
また、付属機能として出力のスタイリングを定義する各種機能も提供しています。

## 資料

- [ドキュメント（英語）](/README.md)

## 使用方法

### ライブラリのインストール

下記コマンドでライブラリをインストール可能です。

### 辞書ファイルの定義

機能を使用する場合コンストラクタ関数に辞書の定義ファイルを渡す必要があるため先に辞書をオブジェクトとして作成します。  
例として下記のように紐付けるメソッドの内部に`id`と`text`を定義します。  
`id`を呼び出し時に指定することにより、対応する`text`の文字列が出力されます。

### dictionary.js

```ts:dictionary.js
const dictionary = {
  error: {
    message: [
      {
        id: 'TEST_ERROR_MESSAGE',
        text: 'This is a test error message.', // <string>
      }
    ]
  },
  log: {...},
}
export default dictionary:
```

## Speakクラス

先程定義した辞書ファイルとライブラリをインポートしインスタンスを作成します。  
作成したインスタンスは定義時に読み込んだ辞書ファイルのみを参照するため、辞書の名前空間を分けたい場合などは追加でインスタンスを作成することが可能です。

```js:speak.js
// ライブラリと辞書ファイルをインポート
import Speak from 'ventriloquy';
import defineMessage from './dictionary';

// インスタンス作成時に辞書ファイルを渡す
const speak = new Speak(defineMessage);

speak.error('TEST_ERROR_MESSAGE');
// console => [ERROR] This is a test error message.
```

### 標準スタイルの定義について

[defaultStyle.ts](./src/configs/defaultStyle.ts)より確認できます。

## LICENSE

[MIT](./LICENSE)
