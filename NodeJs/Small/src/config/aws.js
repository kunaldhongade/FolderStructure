const AWS = require("aws-sdk");

// Set your AWS credentials
AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
  region: "YOUR_REGION",
});

// Create an instance of the AWS service you want to use
const s3 = new AWS.S3();

// Example usage: List all S3 buckets
s3.listBuckets((err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Buckets:", data.Buckets);
  }
});
