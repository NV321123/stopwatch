import { useState } from "react";
import { StopwatchCard } from "@/entities/stopwatch/ui/StopwatchCard";
import type { StopwatchState } from "@/entities/stopwatch/model/types";
import { Button } from '@/shared/ui/Button/Button';
import { ButtonVariant } from '@/shared/ui/Button/Button.types'; 
import { IconPlus } from "@/shared/ui/Icon/icons";
import styles from "./StopwatchPage.module.css";

export const StopwatchPage = () => {
  const [stopwatches, setStopwatches] = useState<StopwatchState[]>([]);

  const addStopwatch = () => {
    const newId =
      stopwatches.length > 0
        ? Math.max(...stopwatches.map((s) => s.id)) + 1
        : 1;
    setStopwatches((prev) => [...prev, { id: newId }]);
  };

  const deleteStopwatch = (id: number) => {
    setStopwatches((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Stopwatch</h1>
      </header>

      <main>
        <Button
          variant={ButtonVariant.ADD}
          onClick={addStopwatch}
          ariaLabel="Add new stopwatch"
        >
          <IconPlus className={styles.icon} /> Add New Stopwatch
        </Button>

        {stopwatches.length !== 0 && (
          <div className={styles.grid}>
            {stopwatches.map((sw) => (
              <StopwatchCard
                key={sw.id}
                id={sw.id}
                onDelete={deleteStopwatch}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
