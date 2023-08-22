import React, { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import typeIcons from "../../utils/typeIcons";
import colors from "../../utils/colors";
import api from "../../services/api";
import * as Network from "expo-network";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DateTimeInput from "../../components/DateTimeInput";

const Task = ({ navigation }) => {
  const [id, setId] = useState();
  const [type, setType] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [when, setWhen] = useState();
  const [done, setDone] = useState(false);
  const [macaddress, setMacaddress] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [keyboardOpened, setKeyboardOpened] = useState(false);
  const isIOS = Platform.OS === "ios";

  const save = async () => {
    if (validateSend()) return;

    const dataSend = {
      macaddress,
      type,
      title,
      description,
      when: `${date}T${hour}.000`,
      done,
    };

    try {
      if (id) {
        return await put(dataSend);
      }

      return await post(dataSend);
    } catch (err) {
      console.error("❌ error save - Task: ", err.message);
    }
  };

  const put = async (dataSend) => {
    await api.put(`/task/${id}`, dataSend);
    Alert.alert("Tarefa alterada com sucesso!", "success");
    return navigation.navigate("Home");
  };

  const post = async (dataSend) => {
    await api.post("/task", dataSend);
    Alert.alert("Tarefa cadastrada com sucesso!", "success");
    return navigation.navigate("Home");
  };

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(
        `/task/${id || navigation.state.params.idTask}`
      );
      console.log(data);
      setType(data.type);
      setTitle(data.title);
      setDescription(data.description);
      setDone(data.done);
      setWhen(data.when);
    } catch (err) {
      console.error("❌ error loadTask - Task: ", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validateSend = () => {
    if (!type) {
      Alert.alert("Você precisa informar o tipo da tarefa.");
      return true;
    }

    if (!title) {
      Alert.alert("Você precisa informar o título da tarefa.");
      return true;
    }

    if (!description) {
      Alert.alert("Você precisa informar a descrição da tarefa.");
      return true;
    }

    if (!date) {
      Alert.alert("Você precisa definir a data da tarefa.");
      return true;
    }
    if (!hour) {
      Alert.alert("Você precisa definir a hora da tarefa.");
      return true;
    }

    return false;
  };

  const watchKeyboard = () => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardOpened(true)
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardOpened(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  };

  const getMacaddress = async () => {
    try {
      const mac = await Network.getIpAddressAsync();
      console.log(mac);
      setMacaddress(mac);
      setIsLoading(false);
    } catch (err) {
      console.error("❌ error getMacaddress - Task: ", err.message);
    }
  };
  const deleteTask = async () => {
    try {
      await api.delete(`/task/${id}`);
      navigation.navigate("Home");
    } catch (err) {
      console.error("❌ error deleteTask - Task: ", err.message);
    }
  };

  const remove = () => {
    Alert.alert(
      "Remover Tarefa",
      "Deseja realmente remover essa tarefa?", // Aqui, adicionei uma vírgula ao final
      [
        {
          text: "Cancelar",
        },
        {
          text: "Confirmar",
          onPress: () => deleteTask(),
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    getMacaddress();
    watchKeyboard();
    if (navigation.state.params) {
      setId(navigation.state.params.idTask);
      loadTasks();
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar backgroundColor={colors.secondary} />
      <Header showBack={true} navigation={navigation} />
      {isLoading ? (
        <ActivityIndicator
          color={colors.primary}
          size={50}
          style={{ marginTop: 150 }}
        />
      ) : (
        <ScrollView style={{ width: "100%" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {typeIcons.map(
              (icon, index) =>
                icon && (
                  <TouchableOpacity key={index} onPress={() => setType(index)}>
                    <Image
                      source={icon}
                      style={[
                        styles.imageIcon,
                        type && type != index && styles.typeIconInative,
                      ]}
                    />
                  </TouchableOpacity>
                )
            )}
          </ScrollView>

          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            maxLength={200}
            placeholder="Lembre-me de fazer..."
            onChangeText={(text) => setTitle(text)}
            value={title}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.area}
            maxLength={30}
            multiline={true}
            placeholder="Detalhes da atividade..."
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <DateTimeInput type="date" save={setDate} dateTime={when} />
          <DateTimeInput type="time" save={setHour} dateTime={when} />

          {id && (
            <View style={styles.inLine}>
              <View style={styles.inputInLine}>
                <Switch
                  style={isIOS && styles.switchIOS}
                  thumbColor={done ? colors.primary : colors.secondary}
                  trackColor={{ false: colors.gray, true: colors.gray }}
                  ios_backgroundColor={colors.gray}
                  onValueChange={() => setDone(!done)}
                  value={done}
                />
                <Text
                  style={isIOS ? styles.switchLabelIOS : styles.switchLabel}
                >
                  CONCLUÍDO
                </Text>
              </View>
              <TouchableOpacity onPress={remove}>
                <Text style={styles.removeLabel}>EXCLUIR</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      )}

      {!keyboardOpened && <Footer icon="save" onPress={save} />}
    </KeyboardAvoidingView>
  );
};

export default Task;
