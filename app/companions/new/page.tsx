import CompanionForm from "@/components/CompanionForm"

const NewCompanion = () => {
  return (
    <main className="lg:w-1/3 md:w-2/3 items-center justify-center">
      <article className="w-full flex flex-col gap-4">
        <CompanionForm />
      </article>
    </main>
  )
}

export default NewCompanion