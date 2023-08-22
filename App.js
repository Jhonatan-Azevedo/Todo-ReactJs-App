import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from "./src/views/Home";
import Task from "./src/views/Task";
import QrCode from "./src/views/QrCode";

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
    QrCode,
  })
);

const App = () => {
  return <Routes />;
};

export default App;
