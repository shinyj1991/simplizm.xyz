import Link from 'next/link'

async function getData() {
  const res = await fetch(`${process.env.NEXT_API_ENTRY}/api/todo`)
  return res.json()
}

export default async function Page() {
  const { data } = await getData()

  return (
    <div>
      <h1>To do list</h1>
      <ul>
        {data.map((item) => (
          <li>
            {item._id} : {item.title}
          </li>
        ))}
      </ul>
      <Link href="/">home</Link>
    </div>
  )
}
