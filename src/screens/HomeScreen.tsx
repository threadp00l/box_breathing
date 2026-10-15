import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Wind, Settings2 ,Play} from 'lucide-react-native';
import { colors } from '../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable } from 'react-native';


type HomeScreenProps = {
  onStart: () => void;
  onSettings: () => void;
};

export function HomeScreen({ onStart, onSettings }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.brand}>
          <View style={styles.logo}>
            <Wind size={24} color={colors.surface} strokeWidth={2} />
          </View>

          <View style={styles.brandText}>
            <Text style={styles.brandTitle}>Box Breathing</Text>
            <Text style={styles.brandSubtitle}>Your daily reset</Text>
          </View>
        </View>

        <View style={styles.settingsButton}>
          <Pressable
  accessibilityRole="button"
  accessibilityLabel="Open settings"
  onPress={onSettings}
  style={styles.settingsButton}
  hitSlop={8}
>
  <Settings2 size={22} color={colors.primary} strokeWidth={2} />
</Pressable>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.eyebrow}>YOUR DAILY RESET</Text>
        <Text style={styles.title}>Take a moment.</Text>
        <Text style={styles.subtitle}>
          A few quiet minutes, one breath at a time.
        </Text>
            <Pressable
  accessibilityRole="button"
  onPress={onStart}
  style={styles.startButton}
>
  <Play size={20} color={colors.surface} fill={colors.surface} />
  <Text style={styles.startButtonText}>Start breathing</Text>
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
    paddingBottom: 16,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandText: {
    gap: 2,
  },
  brandTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  brandSubtitle: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  eyebrow: {
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: colors.primary,
    fontSize: 32,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
  },
 startButton: {
  minHeight: 56,
  backgroundColor: colors.primary,
  borderRadius: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  marginTop: 32,
},
startButtonText: {
  color: colors.surface,
  fontSize: 16,
  fontWeight: '600',
},
});