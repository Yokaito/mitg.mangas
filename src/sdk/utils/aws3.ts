/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-semi */
import { S3Client } from '@aws-sdk/client-s3'
import { env } from '@/env/index'

export const s3: S3Client =
  (global as any).s3 ||
  new S3Client({
    region: env.aws.s3.region,
    credentials: {
      accessKeyId: env.aws.s3.accessKeyId,
      secretAccessKey: env.aws.s3.secretAccessKey,
    },
  })

if (process.env.NODE_ENV !== 'production') {
  ;(global as any).s3 = s3
}

export default s3
