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

### Update
```js
ytdlp.update()
```

## v1.1.0
対応プラットフォームをLinuxに加え、Windows/Macを追加しました。