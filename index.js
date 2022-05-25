import { S3Client, PutObjectCommand} from '@aws-sdk/client-s3';
import { getProducers } from "@telosnetwork/validator-checks";

const s3Client = new S3Client({ region: 'us-east-1'});

const run = async (bucketParams) => {
  await s3Client.send(new PutObjectCommand(bucketParams));
  console.log(
    `Successfully uploaded object:${bucketParams.Bucket}/${bucketParams.Key}`
  );
};

(async ()=> {
  try{
    const producerData = await getProducers();
    const producerDataJson = JSON.stringify(producerData);

    const bucketParams = {
      Bucket: 'telos-producer-validation',
      ContentType: 'application/json', 
      Key: `test-data-${Date.now()}`,   
      Body: producerDataJson
    };

    await run(bucketParams);

  } catch(err) {
    console.error(err);
  }
})();
