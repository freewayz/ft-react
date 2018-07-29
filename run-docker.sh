echo '##Building client docker '
env $(cat .env) yarn run build
mv build docker/
docker build -t finetune-client docker/
rm -rf docker/build
echo 'Done building client ui###'


echo '###Starting api build'
cd django
exec ./build.sh
cd ..
echo 'Visit http://localhost:9000'
exec docker-compose up
