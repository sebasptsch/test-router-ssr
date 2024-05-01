import { createFileRoute } from '@tanstack/react-router'
import { SessionConfig, useSession } from 'vinxi/http'

async function getData() {
  'use server'

  const sesh = await useSession({
    password: 'password12345678901011213134esrdtfghbjnkmldcfgvbhjnmkldfgcvhbjnkmldfghbjlkm',
  } as SessionConfig)

  await sesh.update({
    user: {
      id: 1,
      name: 'John Doe',
    },
  })

  const seshUser = await sesh.data

  return new Promise<string>((r) => {
    setTimeout(() => r('Server: Welcome home!' + JSON.stringify(sesh.data)), 1000)
  })
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
