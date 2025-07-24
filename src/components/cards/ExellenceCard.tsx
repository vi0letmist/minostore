import React from "react";

interface ExellenceCardProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
  title: string;
  description: string;
}

const ExellenceCard: React.FC<ExellenceCardProps> = ({
  icon: Icon,
  iconColor = "text-brand-primary",
  title,
  description,
}) => {
  return (
    <div className="flex-1 flex flex-col px-6 py-4 border-2 bg-bg-primary items-center text-center">
      <div className="py-4">
        <Icon className={`w-[100px] h-[100px] ${iconColor}`} />
      </div>
      <h4 className="font-bold text-base">{title}</h4>
      <p className="text-xs text-text-tertiary">{description}</p>
    </div>
  );
};

export default ExellenceCard;
