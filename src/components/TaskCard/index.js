import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { format } from "date-fns";
import styles from "./styles";

import typeIcons from "../../utils/typeIcons";

const TaskCard = ({ done, title, when, icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, done && styles.cardDone]}
    >
      <View style={styles.cardLeft}>
        <Image source={typeIcons[icon]} style={styles.typeActive} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      <View style={styles.cardRight}>
        <Text style={styles.cardDate}>
          {format(new Date(when), "dd/MM/yyy")}
        </Text>
        <Text style={styles.cardTime}>{format(new Date(when), "HH:mm")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
