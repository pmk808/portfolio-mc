// src/styles/theme/theme.ts
import { Theme } from './types';

export const lightTheme: Theme = {
    bg: {
        primary: '#ffffff',
        secondary: '#f3f4f6'
    },
    text: {
        primary: '#111827',
        secondary: '#4b5563'
    },
    accent: '#2563eb',
    nav: {
        bg: '#ffffff',
        text: '#111827'
    },
    border: '#e5e7eb'
};

export const darkTheme: Theme = {
    bg: {
        primary: '#0a0a0a',
        secondary: '#121212'
    },
    text: {
        primary: '#ffffff',
        secondary: '#a0a0a0'
    },
    accent: '#3b82f6',
    nav: {
        bg: '#121212',
        text: '#ffffff'
    },
    border: '#1f1f1f'
};