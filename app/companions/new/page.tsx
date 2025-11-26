import CompanionForm from "@/components/CompanionForm"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

const NewCompanion = async () => {

  const { userId } = await auth();
  if (!userId) redirect('/sign-in')

  return (
    <main className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 items-center justify-center">
      <article className="w-full">
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion
