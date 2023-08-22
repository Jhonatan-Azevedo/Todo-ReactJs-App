import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import styles from "./styles";
import colors from "../../utils/colors";
import api from "../../services/api";
import * as Network from "expo-network";

// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

const Home = ({ navigation }) => {
  const [filter, setFilter] = useState("today");
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [macaddress, setMacaddress] = useState();

  const loadTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.get(`task/filter/${filter}/${macaddress}`);
      filter === "late" && setLateCount(data.length);
      console.log(data);
      setTasks(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getMacaddress = async () => {
    try {
      const mac = await Network.getIpAddressAsync();
      setMacaddress(mac);
    } catch (err) {
      console.log(err);
    }
  };

  const lateTasks = async () => {
    const { data } = await api.get(`task/filter/late/${macaddress}`);
    setLateCount(data.length);
  };

  const notification = () => {
    setFilter("late");
  };

  const newTask = () => {
    navigation.navigate("Task");
  };

  const showTask = (id) => {
    navigation.navigate("Task", { idTask: id });
  };

  const setStyleFilter = (filterActived) => {
    return filter === filterActived
      ? styles.filterTextActived
      : styles.filterText;
  };

  useEffect(() => {
    getMacaddress().then(() => {
      loadTasks();
      lateTasks();
    });
  }, [filter, macaddress]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.secondary} />
      <Header
        showNotification={true}
        showBack={false}
        pressNotification={notification}
        lateCount={lateCount}
        navigation={navigation}
      />

      <View style={styles.filter}>
        <TouchableOpacity onPress={() => setFilter("all")}>
          <Text style={setStyleFilter("all")}>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("today")}>
          <Text style={setStyleFilter("today")}>Hoje</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("week")}>
          <Text style={setStyleFilter("week")}>Semana</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("month")}>
          <Text style={setStyleFilter("month")}>Mês</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setFilter("year")}>
          <Text style={setStyleFilter("year")}>Ano</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.title}>
        <Text style={styles.titleText}>
          {filter === "late" ? "TAREFAS ATRASADS" : "TAREFAS"}
        </Text>
      </View>

      <ScrollView
        style={styles.cards}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {isLoading ? (
          <ActivityIndicator
            color={colors.primary}
            size={50}
            style={{ marginTop: 30 }}
          />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              done={task.done}
              title={task.title}
              when={task.when}
              icon={task.type}
              onPress={() => showTask(task._id)}
            />
          ))
        )}
      </ScrollView>

      <Footer icon="add" onPress={newTask} />
    </View>
  );
};

export default Home;
