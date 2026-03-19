import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const UserManagementScreen = () => {
  const users = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
    // Add more users as needed
  ];

  const handleEditUser = (id) => {
    // Navigate to edit user screen or show edit modal
  };

  const handleDeleteUser = (id) => {
    // Delete the user from the list
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Button title='Edit' onPress={() => handleEditUser(item.id)} />
            <Button title='Delete' onPress={() => handleDeleteUser(item.id)} />
          </View>
        )}
      />
      <Button title='Add User' onPress={() => { /* Navigate to add user screen */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default UserManagementScreen;