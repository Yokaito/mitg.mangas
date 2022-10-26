export const env = {
  aws: {
    s3: {
      name: process.env.AWS_BUCKET_NAME,
      region: process.env.AWS_BUCKET_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY || '',
      secretAccessKey: process.env.AWS_ACCESS_SECRET || '',
    },
  },
}

export default env
