echo "Sync changes to S3"
echo "Deploying ..."

aws s3 sync . s3://ankiquiz/ --exclude "*git*"

echo "Completed!!!"