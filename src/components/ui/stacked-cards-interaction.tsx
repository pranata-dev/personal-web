/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Orbit, X } from "lucide-react";

interface CardData {
  image: string;
  title: string;
  description: string;
}

const Card3D = ({
  card,
  isFlipped,
  onClick,
}: {
  card: CardData;
  isFlipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="w-[330px] md:w-[350px] h-[400px] cursor-pointer"
      style={{ perspective: 1200 }}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face (Face-down cover) */}
        <div
          className="absolute inset-0 w-full h-full bg-vandyke rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-timberwolf/20 flex items-center justify-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Orbit className="w-16 h-16 text-timberwolf opacity-60" strokeWidth={1.5} />
        </div>

        {/* Back Face (Project Details) */}
        <div
          className="absolute inset-0 w-full h-full bg-seashell rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-timberwolf overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {card.image && (
            <div className="relative h-64 md:h-72 rounded-xl shadow-sm overflow-hidden w-[calc(100%-1rem)] mx-2 mt-2">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="px-5 py-3 flex flex-col gap-y-1.5">
            <h2 className="font-semibold text-lg text-vandyke leading-tight">{card.title}</h2>
            <p className="text-sm text-beaver leading-relaxed">{card.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StackedCardsInteraction = ({
  cards,
  spreadDistance = 40,
  rotationAngle = 5,
  animationDelay = 0.05,
}: {
  cards: CardData[];
  spreadDistance?: number;
  rotationAngle?: number;
  animationDelay?: number;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cardStack, setCardStack] = useState(cards);
  
  // Phase 1 (Stack) vs Phase 2 (Grid Overlay)
  const [isGridState, setIsGridState] = useState(false);
  
  // Track flipped cards in Phase 3
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Render max 3 cards for the stack view
  const stackCards = cardStack.slice(0, 3);

  const handleStackClick = () => {
    // Only cycle if in stack state
    if (!isGridState) {
      setCardStack((prevCards) => {
        const newCards = [...prevCards];
        const firstCard = newCards.shift();
        if (firstCard) newCards.push(firstCard);
        return newCards;
      });
    }
  };

  const toggleFlip = (title: string) => {
    if (!isGridState) return;
    setFlippedCards(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const closeGrid = () => {
    setIsGridState(false);
    // Reset flipped states slightly after the overlay closes
    setTimeout(() => setFlippedCards({}), 400); 
  };

  return (
    <>
      {/* PHASE 1: STACK CONTAINER */}
      <div 
        className={cn(
          "relative w-full flex flex-col items-center justify-center transition-opacity duration-500",
          isGridState ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <div className="relative w-[330px] md:w-[350px] h-[400px]">
          {stackCards.map((card, index) => {
            const isFirst = index === 0;
            let xOffset = 0;
            let rotation = 0;

            if (stackCards.length > 1) {
              if (index === 1) {
                xOffset = -spreadDistance;
                rotation = -rotationAngle;
              } else if (index === 2) {
                xOffset = spreadDistance;
                rotation = rotationAngle;
              }
            }

            return (
              <motion.div
                layoutId={`card-${card.title}`}
                key={card.title}
                className={cn("absolute", isFirst ? "z-10" : "z-0")}
                animate={{
                  x: isHovering && !isGridState ? xOffset : 0,
                  rotate: isHovering && !isGridState ? rotation : 0,
                  zIndex: isFirst ? 10 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  type: "spring",
                }}
                {...(isFirst && !isGridState && {
                  onHoverStart: () => setIsHovering(true),
                  onHoverEnd: () => setIsHovering(false),
                  onClick: handleStackClick,
                })}
              >
                <Card3D 
                  card={card} 
                  isFlipped={true} // Always face up in stack
                  onClick={() => {}} // Handled by motion wrapper in stack mode
                />
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={() => setIsGridState(true)}
          className="mt-12 md:mt-16 font-label-caps text-label-caps text-vandyke hover:text-beaver border-b border-vandyke/30 hover:border-beaver transition-all tracking-widest uppercase"
        >
          Lihat detail
        </button>
      </div>

      {/* PHASE 2 & 3: FULL SCREEN GRID OVERLAY */}
      <AnimatePresence>
        {isGridState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-seashell/95 backdrop-blur-md flex flex-col items-center p-4 md:p-12 overflow-y-auto"
          >
            <div className="w-full max-w-4xl flex justify-end mb-8 sticky top-4 z-50">
              <button
                onClick={closeGrid}
                className="p-3 bg-seashell border border-timberwolf rounded-full shadow-lg text-vandyke hover:scale-105 transition-transform"
                aria-label="Close details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pb-24 items-center justify-items-center w-full max-w-4xl">
              {cardStack.map((card, index) => (
                <motion.div
                  layoutId={`card-${card.title}`}
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * animationDelay,
                    type: "spring"
                  }}
                >
                  <Card3D
                    card={card}
                    isFlipped={!!flippedCards[card.title]}
                    onClick={() => toggleFlip(card.title)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { StackedCardsInteraction, Card3D };
