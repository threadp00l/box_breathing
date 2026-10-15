
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft, Check } from 'lucide-react-native';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

type SettingsScreenProps = {
  phaseDuration: number;
  sessionDurationMinutes: number;
  onPhaseDurationChange: (seconds: number) => void;
  onSessionDurationChange: (minutes: number) => void;
  onBack: () => void;
};

const PHASE_OPTIONS = [2, 3, 4, 5, 6, 7, 8];
const SESSION_OPTIONS = [1, 3, 5, 10, 15];

export function SettingsScreen({
  phaseDuration,
  sessionDurationMinutes,
  onPhaseDurationChange,
  onSessionDurationChange,
  onBack,
}: SettingsScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back to home"
          onPress={onBack}
          style={styles.backButton}
        >
          <ChevronLeft size={24} color={colors.primary} />
        </Pressable>

        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Make it yours.</Text>
        <Text style={styles.subtitle}>
          Find a rhythm and duration that feel comfortable for you.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SECONDS PER PHASE</Text>
          <Text style={styles.description}>
            Each inhale, hold, exhale, and hold will use this duration.
          </Text>

          <View style={styles.options}>
            {PHASE_OPTIONS.map((seconds) => {
              const selected = phaseDuration === seconds;

              return (
                <Pressable
                  key={seconds}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: selected }}
                  onPress={() => onPhaseDurationChange(seconds)}
                  style={[styles.option, selected && styles.optionSelected]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected && styles.optionTextSelected,
                    ]}
                  >
                    {seconds}s
                  </Text>
                  {selected && <Check size={16} color={colors.surface} />}
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SESSION DURATION</Text>
          <Text style={styles.description}>
            Choose how long you'd like your breathing session to last.
          </Text>

          <View style={styles.options}>
            {SESSION_OPTIONS.map((minutes) => {
              const selected = sessionDurationMinutes === minutes;

              return (
                <Pressable
                  key={minutes}
                  accessibilityRole="radio"
                  accessibilityState={{ checked: selected }}
                  onPress={() => onSessionDurationChange(minutes)}
                  style={[
                    styles.option,
                    styles.sessionOption,
                    selected && styles.optionSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selected && styles.optionTextSelected,
                    ]}
                  >
                    {minutes}m
                  </Text>
                  {selected && <Check size={16} color={colors.surface} />}
                </Pressable>
              );
            })}
          </View>
        </View>

        <View style={styles.note}>
          <Text style={styles.noteText}>
            Tip: Start with a comfortable pace. You can stop whenever you need to.
          </Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 8,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  headerSpacer: {
    width: 44,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 28,
  },
  title: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
  },
  section: {
    marginTop: 36,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 16,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  option: {
    minWidth: 58,
    minHeight: 48,
    paddingHorizontal: 12,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  sessionOption: {
    minWidth: 64,
  },
  optionSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  optionText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },
  optionTextSelected: {
    color: colors.surface,
  },
  note: {
    marginTop: 36,
    padding: 16,
    backgroundColor: colors.secondary,
    borderRadius: 16,
  },
  noteText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },
});
