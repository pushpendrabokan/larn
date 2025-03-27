import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card, Text, Avatar, Button, useTheme } from 'react-native-paper';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { Concept } from '../types';

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();
  const theme = useTheme();

  // Mock saved concepts - in real app, this would come from Firebase
  const savedConcepts: Concept[] = [
    {
      id: '1',
      title: 'Market Analysis',
      content: 'Understanding market analysis is crucial for business success...',
      categoryId: '1',
      subtopicId: '1',
      createdAt: new Date(),
    },
    // Add more saved concepts here
  ];

  const renderConcept = ({ item }: { item: Concept }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Concept', { concept: item })}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleMedium" style={styles.title}>
            {item.title}
          </Text>
          <Text variant="bodyMedium" style={styles.content} numberOfLines={2}>
            {item.content}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text
          size={80}
          label={user?.displayName?.split(' ').map(n => n[0]).join('') || 'U'}
          style={styles.avatar}
        />
        <Text variant="headlineSmall" style={styles.name}>
          {user?.displayName}
        </Text>
        <Text variant="bodyLarge" style={styles.email}>
          {user?.email}
        </Text>
      </View>

      <View style={styles.section}>
        <Text variant="titleLarge" style={styles.sectionTitle}>
          Saved Concepts
        </Text>
        <FlatList
          data={savedConcepts}
          renderItem={renderConcept}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>

      <Button
        mode="outlined"
        onPress={logout}
        style={styles.logoutButton}
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.surface,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
    marginBottom: 16,
  },
  name: {
    color: theme.colors.primary,
    marginBottom: 4,
  },
  email: {
    color: theme.colors.text,
  },
  section: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    color: theme.colors.primary,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
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
  content: {
    color: theme.colors.text,
  },
  logoutButton: {
    margin: 16,
    borderColor: theme.colors.primary,
  },
});

export default ProfileScreen; 