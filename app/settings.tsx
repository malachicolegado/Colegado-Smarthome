import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

import { SettingRow } from '@/components/setting-row';
import { Palette } from '@/constants/smart-home';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(false);
  const [unit, setUnit] = useState<'°C' | '°F'>('°C');

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.rows}>
        <SettingRow label="Notifications">
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#E4E4E4', true: '#0A84C4' }}
            thumbColor="#FAFAFA"
            ios_backgroundColor="#E4E4E4"
          />
        </SettingRow>

        <SettingRow label="Temperature Unit">
          <Pressable hitSlop={12} onPress={() => setUnit(unit === '°C' ? '°F' : '°C')}>
            <Text style={styles.value}>{unit}</Text>
          </Pressable>
        </SettingRow>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Palette.background,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: Palette.text,
  },
  rows: {
    marginTop: 40,
  },
  value: {
    fontSize: 15,
    fontWeight: '700',
    color: Palette.text,
  },
});
