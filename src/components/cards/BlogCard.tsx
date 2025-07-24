"use client";

import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  author: string;
  comment: string;
  excerpt: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="col-span-1 group">
      <div className="relative w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={1000}
          height={1000}
          className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-120"
        />
      </div>
      <h6 className="text-sm text-brand-primary font-bold tracking-wider uppercase py-2">
        {post.category}
      </h6>
      <h5 className="text-lg font-bold text-text-secondary mb-2">
        {post.title}
      </h5>
      <div className="flex flex-wrap items-center gap-x-2 text-xs text-accent-tertiary uppercase mb-2">
        <span>{formatDate(post.date)}</span>
        <span className="mx-1 text-base text-red-500">&bull;</span>
        <span>
          OLEH{" "}
          <a href="#" className="text-brand-primary">
            {post.author}
          </a>
        </span>
        <span className="mx-1 text-base text-red-500">&bull;</span>
        <a href="#" className="text-brand-primary">
          <span>{post.comment} KOMENTAR</span>
        </a>
      </div>
      <p className="text-sm text-accent-tertiary mb-4">{post.excerpt}</p>
      <Button size="sm">Baca Selengkapnya</Button>
    </div>
  );
};

export default BlogCard;
