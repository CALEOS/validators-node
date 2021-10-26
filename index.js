import { S3Client, PutObjectCommand} from '@aws-sdk/client-s3';
import { getProducers } from "@telosnetwork/validator-checks";

const PRODUCER_COUNT = 100;
const s3Client = new S3Client({ region: 'us-east-1'});
const run = async (bucketParams) => {
    try {
      await s3Client.send(new PutObjectCommand(bucketParams))
      console.log(
        `Successfully uploaded object:${bucketParams.Bucket}/${bucketParams.Key}`
      )
    } catch (err) {
      console.log('Error', err)
    }
}

(async ()=> {
    const producerData = await getProducers(PRODUCER_COUNT);
    const producerDataJson = JSON.stringify(producerData);

    const bucketParams = {
        Bucket: 'telos-producer-validation',
        ContentType: 'application/json', 
        Key: `test-data-${Date.now()}`,   
        Body: producerDataJson
      };

    await run(bucketParams);
})()