import { motion, Variants } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import type { MarketplaceItem } from "@/constants/marketplace";

interface MarketplaceCardProps {
  item: MarketplaceItem;
  variants: Variants;
  custom: number;
}

export const MarketplaceCard = ({
  item,
  variants,
  custom,
}: MarketplaceCardProps) => {
  return (
    <motion.div
      variants={variants}
      custom={custom}
      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-start space-y-2">
        <div className="p-3 mb-3 bg-primary/10 rounded-lg">
          <Icon name={item.iconName} className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-base xl:text-xl font-semibold text-gray-900 mb-2">
            {item.name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-thin">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
