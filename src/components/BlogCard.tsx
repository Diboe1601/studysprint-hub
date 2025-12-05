import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
}

const BlogCard = ({ id, title, excerpt, category, image, date }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift flex flex-col sm:flex-row">
      <Link to={`/blog/${id}`} className="sm:w-1/3 flex-shrink-0">
        <div className="aspect-video sm:aspect-square sm:h-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-lg font-semibold transition-colors group-hover:text-primary line-clamp-2 mb-2">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground line-clamp-2 text-sm flex-1">{excerpt}</p>
        <Link
          to={`/blog/${id}`}
          className="flex items-center text-sm font-medium text-primary hover:underline group/link mt-3"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
};

export default BlogCard;
