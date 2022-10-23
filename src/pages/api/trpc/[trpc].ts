import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '@/sdk/server/routers/_app'
// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
