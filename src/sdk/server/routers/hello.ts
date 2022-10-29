import { publicProcedure, router } from '../trpc'
import * as Yup from 'yup'
import { base64ToBuffer } from '@/sdk/utils/buffer'
import { constructObjectToS3 } from '@/sdk/lib/aws3'
import { toAvif } from '@/sdk/utils/optimizeImage'

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
      const bufferImage = base64ToBuffer(base64)
      const bufferAvif = await toAvif(bufferImage)

      const data = await s3.client.send(
        constructObjectToS3({
          body: bufferAvif,
          contentEncoding: 'avif',
          contentType: 'image/avif',
          key: 'test.avif',
          publicToRead: true,
        })
      )

      return data
    }),
})
