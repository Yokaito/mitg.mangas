import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { prisma } from '@/sdk/lib/prisma'
import { s3 } from '@/sdk/lib/aws3'
import { env } from '@/sdk/environment'

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  return {
    req: opts?.req,
    prisma,
    s3: {
      client: s3,
      bucket: env.aws.s3.name,
    },
  }
}
export type Context = trpc.inferAsyncReturnType<typeof createContext>
