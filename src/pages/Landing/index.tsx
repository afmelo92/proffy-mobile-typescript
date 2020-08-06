import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useNavigation } from '@react-navigation/native';

function Landing() {

  const {navigate} = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigate('GiveClasses')
  }

  return (
      <View style={styles.container}>
        <Image source={landingImage} style={styles.banner} />

        <Text style={styles.title}>
          Seja bem-vindo, {'\n'}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>
     
      
      <View style={styles.buttonsContainer}>
        <RectButton style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton 
          onPress={handleNavigationToGiveClassesPage} 
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar Aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 434 conexões já realizadas {' '}
        <Image source={heartIcon} />
      </Text>
      
    
    </View>
  )
}

export default Landing;