import React, { useState } from 'react';
import { View } from 'react-native';
import PageHeader from '../../components/PageHeader';


import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';



const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  const [teachers, setTeachers] = useState([]);
  
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  })
  
  return (
    <View style={styles.container}>
    <PageHeader title="Meus proffys favoritos" />
    <ScrollView
      style={styles.favoritesList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}
    >
   {favorites.map((teacher: Teacher) => {
        return (
          <TeacherItem 
            key={teacher.id} 
            teacher={teacher} 
            favoritedTeacher={true}
          />
        )
      })}
    </ScrollView>
  </View>
  );
}

export default Favorites;