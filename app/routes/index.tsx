import { createFileRoute } from '@tanstack/react-router'
import { SessionConfig, getRequestIP, useSession } from 'vinxi/http'

async function getData() {
  'use server'

  const ip = getRequestIP()
  return `Your IP is: ${ip}`
}

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => getData(),
  meta: () => [
    {
      title: 'Home',
    },
  ],
})

function Home() {
  const data = Route.useLoaderData()

  return (
    <div className="p-2">
      <h3>{data}</h3>
    </div>
  )
}
