import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const CategoryScreen = () => {
  const route = useRoute();
  const theme = useTheme();
  const category = route.params?.category;

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        {category?.name}
      </Text>
      <Text variant="bodyLarge" style={styles.description}>
        {category?.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 16,
  },
  title: {
    color: theme.colors.primary,
    marginBottom: 16,
  },
  description: {
    color: theme.colors.text,
  },
});

export default CategoryScreen; 