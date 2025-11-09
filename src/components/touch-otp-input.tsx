import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

type TouchOtpInputProps = {
  length?: number;
  value?: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
};

export function TouchOtpInput({
  length = 11,
  value = "",
  onChange,
  onSubmit,
}: TouchOtpInputProps) {
  const [internalValue, setInternalValue] = useState(value || "");
  const [showKeyboard, setShowKeyboard] = useState(false);

  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  const handleAdd = (digit: string) => {
    if (internalValue.length >= length) {
      setShowKeyboard(false);
      return;
    }

    const newVal = internalValue + digit;
    setInternalValue(newVal);
    onChange(newVal);

    if (newVal.length === length) {
      setTimeout(() => {
        setShowKeyboard(false);
        onSubmit?.();
      }, 250);
    }
  };

  const handleBackspace = () => {
    const newVal = internalValue.slice(0, -1);
    setInternalValue(newVal);
    onChange(newVal);
  };

  useEffect(() => {
    if (internalValue.length >= length) {
      const timeout = setTimeout(() => setShowKeyboard(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [internalValue]);

  const handleFocus = () => setShowKeyboard(true);
  const display = internalValue.padEnd(length, "_").split("");

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      <div
        className="flex justify-center gap-2 cursor-pointer"
        onClick={handleFocus}
      >
        {display.map((char, i) => {
          const filled = char !== "_";
          const active = i === internalValue.length;

          return (
            <motion.div
              key={i}
              layout
              animate={{
                scale: active ? 1.1 : 1,
                borderColor: filled ? "#3B82F6" : "#D1D5DB",
              }}
              transition={{ duration: 0.15 }}
              className={`size-14 text-lg rounded-md border-2 flex items-center justify-center font-semibold ${
                filled
                  ? "text-gray-900 border-blue-500 bg-blue-50"
                  : "text-gray-400 border-gray-300 bg-white"
              }`}
            >
              {filled ? char : ""}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {showKeyboard && (
          <motion.div
            key="keyboard"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-3 gap-4 mt-2"
          >
            {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
              <Button
                key={n}
                onClick={() => handleAdd(String(n))}
                variant="secondary"
                size="lg"
                className="p-8 text-2xl font-semibold"
                type="button"
              >
                {n}
              </Button>
            ))}
            <div />
            <Button
              onClick={() => handleAdd("0")}
              variant="secondary"
              size="lg"
              className="p-8 text-2xl font-semibold"
              type="button"
            >
              0
            </Button>
            <Button
              onClick={handleBackspace}
              variant="destructive"
              size="lg"
              className="p-8 text-2xl font-semibold"
              type="button"
            >
              ⌫
            </Button>

            {onSubmit && (
              <Button
                onClick={onSubmit}
                size="lg"
                className="col-span-3 mt-2 py-6 text-lg font-semibold"
              >
                Confirmar CPF
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
