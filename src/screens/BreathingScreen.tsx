import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Pause, Play, X } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

type BreathingScreenProps = {
  phaseDuration: number;
  sessionDurationMinutes: number;
  onComplete: () => void;
  onEnd: () => void;
};
const PHASES = [
  { label: 'Breathe in', scale: 1 },
  { label: 'Hold', scale: 1 },
  { label: 'Breathe out', scale: 0.72 },
  { label: 'Hold', scale: 0.72 },
];


export function BreathingScreen({
  phaseDuration,
  sessionDurationMinutes,
  onComplete,
  onEnd,
}: BreathingScreenProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(phaseDuration);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sessionDurationSeconds = sessionDurationMinutes * 60;
  const scale = useRef(new Animated.Value(0.72)).current;
  const phase = PHASES[phaseIndex];
  const progress = (elapsedSeconds / sessionDurationSeconds) * 100;

  useEffect(() => {
    if (isPaused) {
      scale.stopAnimation();
      return;
    }

    const animation = Animated.timing(scale, {
      toValue: phase.scale,
      duration: secondsRemaining * 1000,
      useNativeDriver: true,
    });

    animation.start();
    return () => animation.stop();
  }, [phaseIndex, isPaused, scale]); // Animate when a phase starts or resumes.

  useEffect(() => {
    if (isPaused) {
      return;
    }

   const timer = setInterval(() => {
  setElapsedSeconds((elapsed) => {
    const nextElapsed = elapsed + 1;

 if (nextElapsed >= sessionDurationSeconds) {
  clearInterval(timer);
  onComplete();
  return sessionDurationSeconds;
}
    return nextElapsed;
  });

  setSecondsRemaining((remaining) => {
    if (remaining <= 1) {
      setPhaseIndex((index) => (index + 1) % PHASES.length);
      return phaseDuration;
    }

    return remaining - 1;
  });
}, 1000);

    return () => clearInterval(timer);
  }, [isPaused, phaseIndex, onEnd]);

  const handleEnd = () => {
    scale.stopAnimation();
    onEnd();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Box Breathing</Text>
          <Text style={styles.headerSubtitle}>Take it one breath at a time</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="End breathing session"
          onPress={handleEnd}
          style={styles.iconButton}
          hitSlop={8}
        >
          <X size={22} color={colors.primary} />
        </Pressable>
      </View>

      <View style={styles.main}>
        <Text style={styles.phaseLabel}>
          {isPaused ? 'Take your time' : phase.label}
        </Text>

        <Text style={styles.countdown}>
          {isPaused ? 'Ⅱ' : secondsRemaining}
        </Text>

        <View style={styles.squareArea}>
          <Animated.View
            style={[
              styles.breathingSquare,
              { transform: [{ scale }] },
            ]}
          >
            <View style={styles.innerSquare} />
          </Animated.View>
        </View>

        <Text style={styles.guidance}>
          {isPaused
            ? 'Your session is paused.'
            : 'Follow the square. Keep your breathing gentle.'}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.progressLabels}>
          <Text style={styles.progressLabel}>SESSION PROGRESS</Text>
         <Text style={styles.timeLabel}>
            {Math.floor(elapsedSeconds / 60)}:
            {String(elapsedSeconds % 60).padStart(2, '0')} /{' '}
            {Math.floor(sessionDurationMinutes)}:
            {String((sessionDurationMinutes * 60) % 60).padStart(2, '0')}
        </Text>
        </View>

        <View
          style={styles.progressTrack}
          accessibilityRole="progressbar"
          accessibilityValue={{
            min: 0,
            max: sessionDurationSeconds,
            now: elapsedSeconds,
          }}
        >
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isPaused ? 'Resume breathing' : 'Pause breathing'}
          onPress={() => setIsPaused((paused) => !paused)}
          style={styles.pauseButton}
        >
          {isPaused ? (
            <Play size={20} color={colors.surface} fill={colors.surface} />
          ) : (
            <Pause size={20} color={colors.surface} fill={colors.surface} />
          )}
          <Text style={styles.pauseButtonText}>
            {isPaused ? 'Resume session' : 'Pause session'}
          </Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={handleEnd}
          style={styles.endButton}
        >
          <Text style={styles.endButtonText}>End session</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  headerSubtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 3,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  phaseLabel: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
  },
  countdown: {
    color: colors.textSecondary,
    fontSize: 18,
    marginTop: 8,
  },
  squareArea: {
    width: 280,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 24,
  },
  breathingSquare: {
    width: 240,
    height: 240,
    borderRadius: 28,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerSquare: {
    width: '72%',
    height: '72%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  guidance: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 280,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
  },
  timeLabel: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '600',
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.secondary,
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 22,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.accent,
    borderRadius: 3,
  },
  pauseButton: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  pauseButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  endButton: {
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  endButtonText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
});
