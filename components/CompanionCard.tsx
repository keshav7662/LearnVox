"use client";

import { addToBookmark, removeBookmark } from "@/lib/actions/companion.action";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface CompanionCardProps {
  id: string;
  subject: string;
  name: string;
  topic: string;
  color: string;
  duration: number;
  bookmarked: boolean;
}

const CompanionCard = ({ id, subject, name, topic, color, duration, bookmarked: initialBookmarked }: CompanionCardProps) => {
  const pathname = usePathname();
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookmark = async () => {
    setIsLoading(true);
    try {
      if (bookmarked) {
        await removeBookmark(id, pathname);
        setBookmarked(false);
      } else {
        await addToBookmark(id, pathname);
        setBookmarked(true);
      }
    } catch (error) {
      console.error("Bookmark error:", error);
      setBookmarked(!bookmarked);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button
          onClick={handleBookmark}
          className="companion-bookmark"
          disabled={isLoading}
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          <Image
            src={
              bookmarked ? "/icons/bookmark-filled.svg" : "/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>
      <h2 className="text-2xl font-bold line-clamp-1">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  )
};

export default CompanionCard;