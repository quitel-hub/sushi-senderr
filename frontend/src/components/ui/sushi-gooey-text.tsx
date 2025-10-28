import * as React from "react";
import { useTranslation } from "react-i18next";
import { GooeyText } from "./gooey-text-morphing";

interface SushiGooeyTextProps {
  className?: string;
  textClassName?: string;
  morphTime?: number;
  cooldownTime?: number;
}

export function SushiGooeyText({
  className,
  textClassName,
  morphTime = 1.2,
  cooldownTime = 0.6
}: SushiGooeyTextProps) {
  const { t } = useTranslation();

  // Получаем тексты для анимации на текущем языке
  const texts = [
    "SUSHI ICON", // Всегда на английском
    t("sushi.animation.loyaltyProgram") || "ПРОГРАММА ЛОЯЛЬНОСТИ"
  ];

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      <GooeyText
        texts={texts}
        morphTime={morphTime}
        cooldownTime={cooldownTime}
        className={className}
        textClassName={textClassName}
      />
    </div>
  );
}
