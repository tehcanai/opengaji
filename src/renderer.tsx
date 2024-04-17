import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <link href="/static/build.css" rel="stylesheet"></link>
        <title>Open Gaji MY</title>
      </head>
      <body class="bg-[#FBF7F5]">{children}</body>
    </html>
  )
})
