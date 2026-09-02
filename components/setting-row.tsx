import { type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Palette } from '@/constants/smart-home';

export function SettingRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
    paddingVertical: 14,
    borderBottomWidth: 2,
    borderBottomColor: Palette.divider,
  },
  label: {
    fontSize: 19,
    fontWeight: '700',
    color: Palette.text,
  },
});
