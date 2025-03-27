import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

type Concept = {
  title: string;
  content: string;
};

type RouteParams = {
  concept: Concept;
};

const ConceptScreen = () => {
  const route = useRoute();
  const theme = useTheme();
  const concept = (route.params as RouteParams)?.concept;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      padding: 16,
    },
    title: {
      color: theme.colors.primary,
      marginBottom: 16,
    },
    text: {
      color: theme.colors.onSurface,
      lineHeight: 24,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {concept?.title}
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          {concept?.content}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ConceptScreen; 