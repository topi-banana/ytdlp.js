# まじで「てきとー」に作ったので今後改良していくんでごめんなさい

# ytdlp.js
yt-dlp on Node.js


パスの指定が結構シビアなので注意

## yt-dlp 本体の導入
[yt-dlp](https://github.com/yt-dlp/yt-dlp)のダウンロード後、実行ファイルにパスを通す必要があります。

main.jsの3行目付近の
```
const path = './yt-dlp'
```
を書き換えてください。

このパスは main.js からの相対パスではなく、インポートする側の（tester.jsのような）メインファイルからの相対パスを記入してください。


## main.js の導入
main.js　をダウンロードして tester.js のように `requier` で main.js のパスを指定してください。
実行形式などは tester.js を参照してください

## ダウンロードしたファイルの保存場所

main.jsの9行目付近の
```
./list/%(id)s.%(ext)s
```
を書き換えてください。

これは tester.js からの相対パスを指定してください。

`%(id)s` などでファイル名をカスタマイズすることが出来ます。
詳しくは[公式ドキュメント](https://github.com/yt-dlp/yt-dlp#output-template)を確認してください。

## その他 yt-dlp のダウンロードオプションを変更する場合

main.jsの7-12行目付近の配列はダウンロードオプションです。

例えば、

mp3ではなくwavで取得したい場合は
`--audio-format mp3` を `--audio-format wav` に変更

音源ではなく動画のまま取得したい場合は
`-x` と `--audio-format mp3` を削除

詳しくは[公式ドキュメント](https://github.com/yt-dlp/yt-dlp)をご覧ください。

# まじでてきとーに作ったのごめんなさい。このあとちゃんと作ります。