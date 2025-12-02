import CompanionComponent from "@/components/CompanionComponent";
import { getCompanion } from "@/lib/actions/companion.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface CompanionSessionProps {
  params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params }: CompanionSessionProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();

  if (!user) redirect('/sign-in');
  if (!companion) redirect('/companions');

  const { name, subject, topic, duration, voice } = companion;
  return (
    <main>

      <CompanionComponent
        {...companion}
        companionId={id}
        userName={user.firstName!}
        userImage={user.imageUrl!}
      />
    </main>
  )
}

export default CompanionSession