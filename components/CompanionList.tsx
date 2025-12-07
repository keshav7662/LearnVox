import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({ title, companions, classNames }: CompanionListProps) => {
  return (
    <article className={cn('companion-list', classNames)}>
      <h2 className="font-bold text-3xl">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map(({ id, name, subject, topic, duration }, index) => (
            <TableRow key={`${id}-${index}`} className="group">
              <TableCell>
                <Link href={`companions/${id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                      <Image src={`/icons/${subject}.svg`} alt="subject" width={35} height={35} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-4 items-center">
                        <p className="font-bold text-2xl">{name}</p>
                        <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">{subject}</div>
                <div className="flex justify-center items-center w-fit rounded-lg p-2 md:hidden" style={{ backgroundColor: getSubjectColor(subject) }}>
                  <Image src={`/icons/${subject}.svg`} alt={subject} width={15} height={15} />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end">
                  <p className="text-2xl">{duration} <span className="max-md:hidden">mins</span></p>
                  <Image src={'/icons/clock.svg'} alt="minutes" width={14} height={14} className="md:hidden" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </article>
  )
}

export default CompanionList