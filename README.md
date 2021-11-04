# validators-node

boilerplate node implementaiton using validator-checks telos package & aws S3 client

NOTE: in order to push to the S3 bucket `telos-producers-validation` you will need to reference local environment variables as credentials when instantiating the s3 client or configure using aws CLI:
```
$ aws configure
AWS Access Key ID [None]: <access-key-id>
AWS Secret Access Key [None]: <secret-access-key>
Default region name [None]: us-east-1
Default output format [None]: json
```

To use the script in another project install the following packages and copy the script in `index.js`:

```
yarn add @aws-sdk/client-s3
yarn add @telosnetwork/validator-checks
```

To use this project to run the script:
```
git clone https://github.com/CALEOS/validators-node.git

cd validators-node

yarn

node index.js
```