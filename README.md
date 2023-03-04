# ytdlp.js
yt-dlp on Node.js

## 導入

```sh
npm install ytdlp.js
```
```js
const ytdlp = require('ytdlp.js')
```
## メソッド

### 1.情報の取得

```js
ytdlp.info('https://youtu.be/5XcRbKUKSdY')
```
第一引数にURLを与えます

連想配列が返ってって来ます。
動画のタイトル,ID,説明 等

例外が発生した場合はエラーが返ってきます

### 2.ダウンロード
```js
ytdlp.dl('https://youtu.be/5XcRbKUKSdY',{
    core: 3,
    output: 'video',
    audio: true,
    format: 'mp3',
})
```
第一引数にURLを、第二引数にオプションを与えます

```
core : fragmentの同時ダウンロード数。デフォルトは "1"

output : 出力するファイル名。デフォルトは "%(id)s.%(ext)s"

audio : 音声として出力するか。デフォルトは "false"

format : 出力拡張子。デフォルトは動画の場合 "mp4"、音声の場合 "mp3"
```
outputに動画idやタイトル、拡張子を入れることが出来ます。

詳しくは[公式ドキュメント](https://github.com/yt-dlp/yt-dlp#output-template)の OUTPUT TEMPLATE をご覧ください。

正常に終了した場合はtrue、
例外が発生した場合はエラーが返ってきます

### 3.Update
```js
ytdlp.update()
```
ytdlp本体のアップデートを行うことが出来ます。

このパッケージ内でアップデートによって使えなくなった関数やオプション等ありましたら連絡ください。

正常に終了した場合はtrue、
例外が発生した場合はエラーが返ってきます

## v1.1.0
対応プラットフォームをLinuxに加え、Windows/Macを追加しました。

## v1.2.0
updateの追加

## v1.2.1
updateの返り値に関する問題の修正

## v1.2.2
実行ファイルのアップデート
https://github.com/yt-dlp/yt-dlp/releases/tag/2023.02.17

## v1.2.3
v1.2.2の Permission denied の修正

## v2.0.0
返り値の変更

エラーを吐かずに、返り値に 終了ステータス/エラー文 等を含む形式に

```js
// ytdlp.info('https://...')
{
    status: true,
    return: {
        title: '動画タイトル',
        id: '動画ID',
        ...
    }
}
```
```js
{
    status: false,
    detail: '[youtube] XXXXXX: Video unavailable',
}
```
正常である場合に `status: true` ,そうでない場合に `status: false` が返ってくる

正常ではない場合のエラーの詳細は `detail` に含まれ

今までの通常の返り値はreturn内に含む

## v2.0.1
v2.0.0返り値変更時にできた問題の修正