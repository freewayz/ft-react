echo "### Building docker image for api #### "
python3 setup.py sdist
mv dist/*.tar.gz docker/
docker build -t finetune-api docker/
