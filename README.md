# Box Breathing

A simple, customizable box breathing app built with React Native and TypeScript.

Box breathing is a guided breathing technique that alternates between four phases: inhaling, holding your breath, exhaling, and holding again. This app provides a visual guide and configurable timers to help users follow the exercise at their own pace.

## Features

- **Guided breathing sessions** — Follow the four phases of box breathing with clear visual and text prompts.
- **Animated breathing guide** — An animated box provides a visual cue for each phase of the exercise.
- **Customizable breathing intervals** — Adjust the duration of each phase, with a default of four seconds.
- **Flexible session durations** — Choose how long you want your breathing session to last.
- **Session controls** — Pause, resume, or stop a session at any time.
- **Progress indicators** — View the countdown for the current phase and the remaining session time.
- **Persistent preferences** — Keep your preferred settings between sessions.
- **Accessibility-focused UI** — Designed with screen readers, readable text, and accessible controls in mind.
- **Dark mode** — Support for a comfortable viewing experience in different lighting conditions.

## Goals

This project serves two purposes:

1. Provide a lightweight, easy-to-use guided breathing experience without unnecessary complexity.
2. Demonstrate modern mobile development practices, including reusable components, TypeScript, accessibility, automated testing, and maintainable application architecture.

## Technology

- React Native
- TypeScript
- Android

## Getting Started

### Prerequisites

- Node.js and npm
- JDK and Android development tooling compatible with the React Native version used by this project
- Android Studio and an Android emulator, or a physical Android device

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/threadp00l/box_breathing.git
cd box_breathing
npm install
```

Start Metro:

```bash
npm start
```

In a separate terminal, launch the Android app:

```bash
npm run android
```

Refer to the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment) if you need help configuring your development environment.

## Project Status

This project is under active development. Features and implementation details may evolve as the app progresses toward its initial release.

## Privacy

The intended design is local-first: breathing sessions and preferences do not require a user account or a remote backend. Any future changes to data collection or network behavior will be documented here.

## Disclaimer

Box breathing is presented as a general relaxation exercise, not as medical advice or treatment. Stop the exercise if you feel uncomfortable, dizzy, or short of breath.

## License

A license has not yet been selected. All rights are reserved unless a license is added to this repository.
