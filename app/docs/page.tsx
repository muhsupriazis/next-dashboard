import { TableDocs } from "@/components/table/docs"
import { columDocs, typeDocumentation } from "@/types/table/docs"


async function getData(): Promise<typeDocumentation[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        title: "Struktur HTML bang",
        updatedAt: '12-09-2023',
        contributor: 'muhsupriazis@gmail.com',
        status: "publish"
      },
      {
        id: "728ed52f",
        title: "Struktur HTML bang",
        updatedAt: '12-09-2023',
        contributor: 'muhsupriazis@gmail.com',
        status: "publish"
      },
      {
        id: "728ed52f",
        title: "Struktur HTML bang",
        updatedAt: '12-09-2023',
        contributor: 'muhsupriazis@gmail.com',
        status: "publish"
      },
      // ...
    ]
  }

export default async function DocsPage() {
const data = await getData()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {/* <h1>Menage Documentation</h1> */}
        <TableDocs columns={columDocs} data={data} />
    </section>
  )
}
