import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/no-title')({
  component: () => <div>Hello /no-title!</div>
})