
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Check, Heart, RotateCcw } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

type CompletionScreenProps = {
  sessionDurationMinutes: number;
  onAgain: () => void;
  onHome: () => void;
};

export function CompletionScreen({
  sessionDurationMinutes,
  onAgain,
  onHome,
}: CompletionScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Heart size={44} color={colors.primary} strokeWidth={1.6} />
          <View style={styles.checkBadge}>
            <Check size={16} color={colors.surface} strokeWidth={3} />
          </View>
        </View>

        <Text style={styles.eyebrow}>SESSION COMPLETE</Text>
        <Text style={styles.title}>Well done.</Text>
        <Text style={styles.subtitle}>
          You made space for yourself today. Take this feeling with you into
          whatever comes next.
        </Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>TIME FOR YOURSELF</Text>
          <Text style={styles.duration}>
            {sessionDurationMinutes}{' '}
            <Text style={styles.durationUnit}>
              {sessionDurationMinutes === 1 ? 'minute' : 'minutes'}
            </Text>
          </Text>
          <View style={styles.divider} />
          <Text style={styles.summaryMessage}>
            One breath at a time. One moment at a time.
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={onAgain}
            style={styles.primaryButton}
          >
            <RotateCcw size={19} color={colors.surface} />
            <Text style={styles.primaryButtonText}>Breathe again</Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            onPress={onHome}
            style={styles.secondaryButton}
          >
            <Text style={styles.secondaryButtonText}>Back to home</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  iconCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  checkBadge: {
    position: 'absolute',
    right: 2,
    bottom: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.background,
  },
  eyebrow: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: colors.primary,
    fontSize: 36,
    fontWeight: '600',
    marginTop: 12,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 12,
    maxWidth: 310,
  },
  summaryCard: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 22,
    alignItems: 'center',
    marginTop: 36,
  },
  summaryLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  duration: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: '600',
    marginTop: 10,
  },
  durationUnit: {
    fontSize: 18,
    fontWeight: '500',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 18,
  },
  summaryMessage: {
    color: colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
  },
  actions: {
    width: '100%',
    marginTop: 28,
    gap: 8,
  },
  primaryButton: {
    minHeight: 54,
    borderRadius: 16,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  primaryButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: colors.textSecondary,
    fontSize: 15,
    fontWeight: '600',
  },
});
