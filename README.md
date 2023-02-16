# Blockchain-Explorer
Important: repeat the below steps after every git pull

From the root of the repository:

./main.sh clean
To clean the /node_modules, client/node_modules client/build, client/coverage, app/test/node_modules directories
./main.sh install
To install, run tests, and build project
Or

  $ cd blockchain-explorer
  $ npm install
  $ cd client/
  $ npm install
  $ npm run build


Nodejs installation
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
Build widgets
yarn upgrade widgets
yarn install --check-files
Run capistrano
Setup local name bitquery in your /etc/hosts file before running:

cap production deploy
