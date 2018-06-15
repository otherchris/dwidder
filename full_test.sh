#! /bin/bash

curl localhost:3000 | grep "dwidder" > /dev/null || { echo "ERROR: local client not running"; exit 1; }
curl localhost:4000 | grep "Phoenix" > /dev/null || { echo "ERROR: local server not running"; exit 1; }

cd api
mix test > /dev/null || { echo "FAIL in server unit tests"; exit 1; }

cd ../client
CI=true npm run test || { echo "FAIL in client unit tests"; exit 1; }
cypress run || { echo "FAIL in local integration tests"; exit 1; }
npm run lint || { echo "FAIL in eslint"; exit 1; }
cd ../api
mix credo --strict || { echo "FAIL in credo"; exit 1; }
