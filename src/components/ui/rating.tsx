import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";

interface RatingProps {
  value: number; // e.g., 3.5
  size?: number; // optional: size in pixels
  className?: string;
}

const Rating: React.FC<RatingProps> = ({
  value,
  size = 20,
  className = "",
}) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const diff = value - i + 1;

    if (diff >= 1) {
      stars.push(
        <StarSolidIcon
          key={i}
          className={className}
          style={{ width: size, height: size }}
          aria-hidden="true"
        />
      );
    } else if (diff >= 0.5) {
      stars.push(<HalfStar key={i} size={size} className={className} />);
    } else {
      stars.push(
        <StarIcon
          key={i}
          className={className}
          style={{ width: size, height: size }}
          aria-hidden="true"
        />
      );
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

export default Rating;

const HalfStar: React.FC<{ size: number; className?: string }> = ({
  size,
  className = "",
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.176L12 18.896l-7.336 3.858 1.402-8.176L.132 9.21l8.2-1.192L12 .587z"
        fill="url(#half)"
      />
      <path
        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.402 8.176L12 18.896l-7.336 3.858 1.402-8.176L.132 9.21l8.2-1.192L12 .587z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};
