import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import { View, Image, Text } from 'react-native';

import heartOutlineButton from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          source={{uri: 'https://github.com/afmelo92.png'}}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Andre Melo</Text>
          <Text style={styles.subject}>Historia</Text>
        </View>
      </View>

      <Text style={styles.bio}>
          O maior cheirador de Ritalina desse Brazilsão de são joão!
           {'\n'} {'\n'}
          Apaixonado por história. especialmente quando estou chapado!

          Tamo junto!
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'    '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineButton} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;