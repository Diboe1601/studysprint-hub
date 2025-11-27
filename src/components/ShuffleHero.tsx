import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ShuffleHeroProps {
  badge?: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const ShuffleHero = ({ badge, title, description, buttonText, buttonLink }: ShuffleHeroProps) => {
  return (
    <section className="w-full px-8 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
      <div>
        {badge && (
          <span className="block mb-4 text-xs md:text-sm text-primary font-medium">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          {title}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground my-4 md:my-6">
          {description}
        </p>
        {buttonText && buttonLink && (
          <a href={buttonLink}>
            <button className="bg-primary text-primary-foreground font-medium py-3 px-6 rounded-lg transition-all hover:bg-primary/90 active:scale-95">
              {buttonText}
            </button>
          </a>
        )}
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?w=800&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-md"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
