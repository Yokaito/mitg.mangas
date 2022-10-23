import * as yup from 'yup'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
  hello: publicProcedure
    .input(
      yup.object({
        text: yup.string().required(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
})
// export type definition of API
export type AppRouter = typeof appRouter
