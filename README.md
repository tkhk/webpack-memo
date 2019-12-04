# webpack-sample

webpack のお試し兼備忘録

## document

- https://webpack.js.org

## how to develop

- ローカルに動作環境作るのが面倒臭いので docker を使う
- `docker-compose up` + `docker-compose run /bin/bash` でコンテナの中に入って試す

## initialize

最初に何をやったかのメモ

1. `cd /opt/webpack-memo`
2. `yarn init`
3. `yarn add webpack webpack-cli --dev`

## memo

- html-webpack-plugin
  - 起点になる html も output に出力してくれる
  - 生成した bundle.js とかが読み込まれるようになってたり
  - webpack-dev-server でもいい感じにしてくれる
- clean-webpack-plugin
  - ```this plugin will remove all files inside webpack's output.path directory```
