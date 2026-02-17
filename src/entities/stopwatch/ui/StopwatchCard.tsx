import React from "react";
import { Button } from '@/shared/ui/Button/Button';
import { ButtonVariant } from '@/shared/ui/Button/Button.types'; 
import { formatTime } from "@/shared/lib/formatTime";
import {
  IconPlay,
  IconPause,
  IconTrash,
  IconSparkles,
} from "@/shared/ui/Icon/icons";
import { useStopwatch } from "../model/useStopwatch";
import { StopwatchStatus } from "../model/types";
import styles from "./StopwatchCard.module.css";

interface StopwatchCardProps {
  id: number;
  onDelete: (id: number) => void;
}

export const StopwatchCard: React.FC<StopwatchCardProps> = ({
  id,
  onDelete,
}) => {
  const { status, time, actions } = useStopwatch();

  const displayTime = formatTime(time);
  const isIdle = status === StopwatchStatus.IDLE;
  const isRunning = status === StopwatchStatus.RUNNING;
  const isPaused = status === StopwatchStatus.PAUSED;

  return (
    <article className={styles.card} aria-label={`Stopwatch ${id}`}>
      <div className={styles.header}>
        <span className={styles.title}>{id}</span>
        <button
            onClick={() => onDelete(id)}
            className={styles.deleteBtn}
            aria-label="Delete stopwatch"
          >
            <IconTrash className={styles.icon} />
        </button>
      </div>

      <div className={styles.timeDisplay} role="timer" aria-live="off">
        {displayTime}
      </div>

      <div className={`${styles.controls} ${!isIdle ? styles.expanded : ""}`}>
        {isIdle && (
          <Button
            variant={ButtonVariant.PRIMARY}
            onClick={actions.start}
            ariaLabel="Start"
          >
            <IconPlay className={styles.icon} /> Start
          </Button>
        )}

        {isRunning && (
          <>
            <Button
              variant={ButtonVariant.SECONDARY}
              onClick={actions.pause}
              ariaLabel="Pause"
            >
              <IconPause className={styles.icon} /> Pause
            </Button>
            <Button
              variant={ButtonVariant.DANGER}
              onClick={actions.clear}
              ariaLabel="Clear"
            >
              <IconSparkles className={styles.icon} /> Clear
            </Button>
          </>
        )}

        {isPaused && (
          <>
            <Button
              variant={ButtonVariant.PRIMARY}
              onClick={actions.resume}
              ariaLabel="Resume"
            >
              <IconPlay className={styles.icon} /> Resume
            </Button>
            <Button
              variant={ButtonVariant.DANGER}
              onClick={actions.clear}
              ariaLabel="Clear"
            >
              <IconSparkles className={styles.icon} /> Clear
            </Button>
          </>
        )}
      </div>
    </article>
  );
};
