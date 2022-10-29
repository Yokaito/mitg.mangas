import { publicProcedure, router } from '../trpc'
import * as Yup from 'yup'
import { base64ToBuffer } from '@/sdk/utils/buffer'
import { constructObjectToS3 } from '@/sdk/lib/aws3'

export const helloRouter = router({
  greetings: publicProcedure
    .input(
      Yup.object({
        name: Yup.string().required(),
      })
    )
    .query(async ({ input: { name } }) => {
      return {
        message: `Hello ${name}`,
      }
    }),
  sendFile: publicProcedure
    .input(
      Yup.object({
        base64: Yup.lazy((value) =>
          /^data/.test(value)
            ? Yup.string()
                .trim()
                .matches(
                  /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
                  'Must be a valid data URI'
                )
                .required()
            : Yup.string().trim().url('Must be a valid URL').required()
        ),
      })
    )
    .mutation(async ({ input: { base64 }, ctx }) => {
      const { s3 } = ctx
      // get type from base64
      const type = base64.split(';')[0].split('/')[1]
      const bufferImage = base64ToBuffer(base64)

      const data = await s3.client.send(
        constructObjectToS3({
          body: bufferImage,
          contentEncoding: 'type',
          contentType: `image/${type}`,
          key: `test.${type}`,
          publicToRead: true,
        })
      )

      return data
    }),

  saveText: publicProcedure
    .input(
      Yup.object({
        text: Yup.string().required(),
      })
    )
    .mutation(async ({ input: { text }, ctx }) => {
      const { s3 } = ctx

      const data = await s3.client.send(
        constructObjectToS3({
          body: text,
          contentType: 'text/plain',
          key: `${text}.txt`,
          publicToRead: true,
          contentEncoding: 'utf-8',
        })
      )

      return data
    }),
})
