import { publicProcedure, router } from '../trpc'
import * as Yup from 'yup'

export const helloRouter = router({
  greetings: publicProcedure
    .input(
      Yup.object({
        name: Yup.string().required(),
      })
    )
    .query(({ input: { name } }) => {
      return {
        message: `Hello ${name}`,
      }
    }),
})
