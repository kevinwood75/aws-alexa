[[ -e lambda_upload.zip ]] && rm -f lambda_upload.zip
zip -r lambda_upload.zip index.js
aws lambda update-function-code --function-name GreetingSkill --zip-file fileb://lambda_upload.zip
