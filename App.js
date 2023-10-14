import {
  Entypo,
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { AnimateStyle} from "react-native-reanimated";
import { GestureHandlerRootView} from "react-native-gesture-handler"

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Modal isVisible={isModalVisible} style={{ backgroundColor: "#000" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.modalHeaderContainer}>
            <TouchableOpacity onPress={toggleModal}>
              <MaterialIcons name="cancel" size={34} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="save" size={34} color="#fff" />
            </TouchableOpacity>
          </View>
          <TextInput style={styles.inputContainer} autoCapitalize="none" />
          <TouchableOpacity></TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <FontAwesome name="refresh" size={34} color="#fff" />
        <Feather name="save" size={34} color="#fff" />
      </View>
      <View style={styles.editorBoxContainer}>
        {/* <Animated.View>
        <View style={styles.box} />
      </Animated.View> */}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={toggleModal}>
          <FontAwesome name="pencil" size={34} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="image" size={34} color="#fff" />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#000",
    padding: 10,
  },
  modalHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    gap: 20,
  },
  editorBoxContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: 600,
    marginTop: 10,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "space-between",
    padding: 10,
    gap: 20,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  box: {
    height: 50,
    width: 150,
    backgroundColor: "grey",
    borderRadius: 5,
  },
});

