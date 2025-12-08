'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { useRouter, useSearchParams } from "next/navigation";

const SubjectFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedSubject = searchParams.get('subject') || ''

  const handleChange = (value: string) => {
    if (value === "clear") {
      const newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"]
      });
      router.push(newUrl, { scroll: false });
    } else {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'subject',
        value
      });
      router.push(newUrl, { scroll: false });
    }
  };

  return (
    <Select onValueChange={handleChange} value={selectedSubject}>
      <SelectTrigger className="w-[180px] relative border border-black rounded-lg 
      flex items-center gap-2 px-2 py-1 h-fit">
        <SelectValue placeholder="Select a subject" />
      </SelectTrigger>
      <SelectContent>
        {subjects.map((subject) => (
          <SelectItem
            key={subject}
            value={subject}
            className="capitalize"
          >
            {subject}
          </SelectItem>
        ))}
        <SelectItem value="clear"
          className="capitalize text-red-500">clear filter</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SubjectFilter
