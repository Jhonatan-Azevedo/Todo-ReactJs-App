import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  View,
  Platform,
  Modal,
  Text,
  Alert,
} from "react-native";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format, isPast } from "date-fns";

import iconCalendar from "../../assets/calendar.png";
import iconClock from "../../assets/clock.png";

const DateTimeInput = ({ type, save, dateTime }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [displayedValue, setDisplayedValue] = useState("");
  const validateType = type === "date";
  const isIOS = Platform.OS === "ios";

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(false);
    setDate(currentDate);

    const formatDateTime = validateType
      ? format(currentDate, "dd/MM/yyyy")
      : format(currentDate, "HH:mm");

    const formatDateTimeDB = validateType
      ? format(currentDate, "yyyy-MM-dd")
      : format(currentDate, "HH:mm:ss");

    setDisplayedValue(formatDateTime);
    return save(formatDateTimeDB);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(type);
  };

  useEffect(() => {
    if (dateTime) {
      onChangeDateTime(new Date(dateTime));
    }
  }, [dateTime]);

  return (
    <View>
      {isIOS ? (
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          onRequestClose={() => setShow(false)}
        >
          {show && (
            <View style={styles.modalIOS}>
              <Text style={styles.textModalIOS}>
                {validateType
                  ? "Clique aqui para definir a data"
                  : "Clique aqui para definir a hora"}
              </Text>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChangeDateTime}
              />
            </View>
          )}
        </Modal>
      ) : (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChangeDateTime}
          />
        )
      )}

      <TouchableOpacity onPress={showDatepicker}>
        <TextInput
          style={styles.input}
          placeholder={
            validateType
              ? "Clique aqui para definir a data"
              : "Clique aqui para definir a hora"
          }
          editable={false}
          value={displayedValue}
        />

        <Image
          style={isIOS ? styles.iconTextInputIOS : styles.iconTextInput}
          source={validateType ? iconCalendar : iconClock}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DateTimeInput;
