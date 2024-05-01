import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/no-title')({
  component: () => <article className='prose'>

    <h1>No Title</h1>
    <p>
      This is a page without a <b>title</b>.
    </p>
    <h2>Subheading 1</h2>
    <h3>Subsubheading</h3>
    <p>
      This is a paragraph.
    </p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
    </ol>

  </article>
})