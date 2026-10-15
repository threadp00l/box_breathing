import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/HomeScreen';
import { BreathingScreen } from './src/screens/BreathingScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { CompletionScreen } from './src/screens/CompletionScreen';

type Screen = 'home' | 'settings' | 'breathing' | 'completion';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [phaseDuration, setPhaseDuration] = useState(4);
  const [sessionDurationMinutes, setSessionDurationMinutes] = useState(5);

  return (
    <SafeAreaProvider>
      {screen === 'settings' ? (
        <SettingsScreen
          phaseDuration={phaseDuration}
          sessionDurationMinutes={sessionDurationMinutes}
          onPhaseDurationChange={setPhaseDuration}
          onSessionDurationChange={setSessionDurationMinutes}
          onBack={() => setScreen('home')}
        />
      ) : screen === 'breathing' ? (
        <BreathingScreen
          phaseDuration={phaseDuration}
          sessionDurationMinutes={sessionDurationMinutes}
          onComplete={() => setScreen('completion')}
          onEnd={() => setScreen('home')}
        />
      ) : screen === 'completion' ? (
        <CompletionScreen
          sessionDurationMinutes={sessionDurationMinutes}
          onAgain={() => setScreen('breathing')}
          onHome={() => setScreen('home')}
        />
      ) : (
        <HomeScreen
          onStart={() => setScreen('breathing')}
          onSettings={() => setScreen('settings')}
        />
      )}
    </SafeAreaProvider>
  );
}