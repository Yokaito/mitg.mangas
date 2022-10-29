/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-extra-semi */
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
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

type PutObjectToS3 = {
  publicToRead: boolean
  key: string
  body: Buffer
  contentEncoding: string
  contentType: string
}

export const constructObjectToS3 = ({
  body,
  contentEncoding,
  contentType,
  key,
  publicToRead,
}: PutObjectToS3) => {
  return new PutObjectCommand({
    Bucket: env.aws.s3.name,
    Key: key,
    Body: body,
    ACL: publicToRead ? 'public-read' : undefined,
    ContentEncoding: contentEncoding,
    ContentType: contentType,
  })
}

if (process.env.NODE_ENV !== 'production') {
  ;(global as any).s3 = s3
}

export default s3
