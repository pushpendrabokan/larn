import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const categories = [
  {
    id: '1',
    name: 'Business',
    description: 'Learn about business concepts and strategies',
  },
  {
    id: '2',
    name: 'Startup',
    description: 'Understanding startup ecosystem and entrepreneurship',
  },
  {
    id: '3',
    name: 'Psychology',
    description: 'Explore human behavior and mental processes',
  },
  {
    id: '4',
    name: 'Human Relationships',
    description: 'Understanding interpersonal dynamics',
  },
  {
    id: '5',
    name: 'Finance',
    description: 'Learn about financial concepts and management',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Category', { category: item })}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            {item.name}
          </Text>
          <Text variant="bodyMedium" style={styles.description}>
            {item.description}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: theme.colors.surface,
    elevation: 4,
  },
  title: {
    color: theme.colors.primary,
    marginBottom: 8,
  },
  description: {
    color: theme.colors.text,
  },
});

export default HomeScreen; 