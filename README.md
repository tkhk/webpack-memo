# webpack-memo

webpack のお試し兼備忘録

## how to develop

- ローカルに動作環境作るのが面倒臭いので docker を使う
- `docker-compose up` + `docker-compose run /bin/bash` でコンテナの中に入って試す

## initialize

最初に何をやったかのメモ

1. `cd /opt/webpack-memo`
2. `yarn init`
3. `yarn add webpack webpack-cli --dev`

## memo

- loader 関連
  - webpack から各パッケージを利用するためのパッケージ
  - babel-loader であれば, webpack から babel を利用できるようにする
- html-webpack-plugin
  - 起点になる html も output に出力してくれる
  - 生成した bundle.js とかが読み込まれるようになってたり
  - webpack-dev-server でもいい感じにしてくれる
- clean-webpack-plugin
  - ```this plugin will remove all files inside webpack's output.path directory```
- webpack-merge
  - その名の通り webpack.conf のマージができる(dev 用, prod 用でファイルを分けられる)
  - mode だけ変えたいとかであれば, `webpack --mode production` とかでも良いかも
- @babel/preset-react
  - jsx を javascript に変換する

