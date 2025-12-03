import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.action";
import { auth } from "@clerk/nextjs/server"
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => {

  const { userId } = await auth();
  if (!userId) redirect('/sign-in')

  const canCreateCompanion = await newCompanionPermissions();
  return (
    <main className="w-full md:w-3/4 lg:w-1/2 xl:w-2/5 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full">
          <CompanionForm />
        </article>
      ) : (<article className="companion-limit">
        <Image src="/images/limit.svg" alt="Companion limit reached" width={320} height={230} />
        <div className="cta-badge">
          Upgrade your plan
        </div>
        <h1>You've Reached Your Limit</h1>
        <p>You've reached your companion creation limit. Upgrade to create more companions and access premium features.</p>
        <Link href='/subscription' className="btn-primary w-full justify-center">
            Upgrade My Plan
        </Link>
      </article>)}
    </main>
  )
}

export default NewCompanion
