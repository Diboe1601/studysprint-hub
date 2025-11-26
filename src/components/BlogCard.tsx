import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
    <Card className="group overflow-hidden hover-lift">
      <Link to={`/blog/${id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <Link to={`/blog/${id}`}>
          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          to={`/blog/${id}`}
          className="flex items-center text-sm font-medium text-primary hover:underline group/link"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
