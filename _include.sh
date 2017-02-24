export DOMAINS="vuecharts.baylaunch.com"
export AWS_HOST=cl1
export HEROKU_APP="vuecharts"
export DEV_DB="vuecharts_dev"
export PROD_DB="vuecharts_prod"

PROD_DB_USER="meerkat"
PROD_DB_PARAMS="user=$PROD_DB_USER dbname=$PROD_DB host=localhost"
#PROD_DB_PARAMS="user=$PROD_DB_USER dbname=$PROD_DB host=your_rds_url_here password=your_password_here port=5432 sslmode=require"

source ../mvp/lib/_include.sh || echo "no include"
