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
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [textElements, setTextElements] = useState([
    "hello",
    "world",
    "good",
    "day",
  ]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, context) => {
      //  CONTEXT IS THE STORED VALUE
      context.startX = x.value; //  EVENT IS THE CURRENT VALUE
      context.startY = y.value;
    },
    onActive: (event, context) => {
      // console.log(event.translationX)
      // console.log(event.translationY)
      console.log("x:" + x.value);
      console.log("y:" + y.value);
      if (x.value > 100 || x.value < -100) {
        return;
      }
      if (y.value > 520 || y.value < -27) {
        return;
      }
      x.value = context.startX + event.translationX;
      y.value = context.startY + event.translationY;
    },
    onEnd: (event, context) => {
      if (x.value > 100) {
        return (x.value = 100);
      }
      if (x.value < -100) {
        return (x.value = -100);
      }
      if (y.value > 522) {
        return (y.value = 519);
      }
      if (y.value < -27) {
        return (y.value = -27);
      }
      x.value = context.startX + event.translationX;
      y.value = context.startY + event.translationY;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    };
  });

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
        <PanGestureHandler onGestureEvent={gestureHandler}>
          {/* <Animated.FlatList
            data={textElements}  
            renderItem={({item,index})=>{
              console.log(item)
               return (
                <Animated.View>
                  <Animated.Text>{item}</Animated.Text>
                </Animated.View>
                );
              }}
            /> */}
          <Animated.View style={[styles.box, animatedStyle]}></Animated.View>
        </PanGestureHandler>
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
    margin: 20,
  },
});
