import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
