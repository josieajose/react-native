import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  Card,
  TextField,
  Text,
  Button,
  Colors,
  Assets,
  Image,
  Avatar,
  Carousel,
  ListItem,
} from "react-native-ui-lib";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

Colors.loadColors({
  primary: "#012169",
  secondary: "#ef2b23",
  black: "#1c1c1c",
  ash: "#a6a7a8",
  text: "#20303C",
  white: "#ffffff",
  onlineColor: "green",
});

Assets.loadAssetsGroup("icons", {
  icon1: require("./assets/logo.png"),
  usa: require("./assets/usa2.png"),
  nigeria: require("./assets/nigeria.png"),
});

const Tab = createBottomTabNavigator();
function Details() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: 10,
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Text>Back</Text>
      </TouchableOpacity>
      <Text>Details!</Text>
    </View>
  );
}
function Feed() {
  const navigation = useNavigation();
  const star = require("./assets/star.png");
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa977f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-1455571e29d72",
      title: "Third Item",
    },
  ];
  const avatars = {
    size: 40,
    backgroundColor: Colors.red60,
    source: {
      uri: "https://itech.com.ng/images/profile.png",
    },
    badgePosition: "TOP_RIGHT",
    badgeProps: {
      label: "9",
      size: 16,
      backgroundColor: Colors.secondary,
      borderWidth: 1.5,
      borderColor: Colors.white,
    },
  };

  const profile = {
    size: 50,
    source: {
      uri: "https://itech.com.ng/images/profile2.png",
    },
    badgeProps: {
      size: 8,
      borderWidth: 1.5,
      borderColor: Colors.white,
      backgroundColor: Colors.onlineColor,
    },
    badgePosition: "TOP_LEFT",
  };

  const renderItem = ({ item }) => (
    <ListItem marginV-5>
      <ListItem.Part left>
        <View row>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ebebeb",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <MaterialCommunityIcons
              name="repeat"
              style={{ fontSize: 25 }}
              color={Colors.primary}
            ></MaterialCommunityIcons>
          </View>
          <View marginH-12 style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Exchanged</Text>
            <Text style={{ fontSize: 12, color: Colors.ash }}>10mins ago</Text>
          </View>
          <View flex right style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>$200</Text>
            <Text style={{ fontSize: 12, color: Colors.ash }}>Received</Text>
          </View>
        </View>
      </ListItem.Part>
    </ListItem>
  );

  return (
    <SafeAreaView>
      <View>
        <View marginB-15>
          <View row padding-15>
            <View flex left paddingT-5>
              <Image assetName="icon1" />
            </View>
            <View flex right paddingR-5>
              <TouchableOpacity>
                <Avatar {...avatars} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View row>
            <View
              flex-1
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <TouchableOpacity
                style={{
                  textAlign: "center",
                  borderWidth: 1,
                  borderStyle: "dashed",
                  borderRadius: 5,
                  padding: 10,
                  borderColor: Colors.ash,
                }}
              >
                <MaterialCommunityIcons
                  name="plus"
                  style={{ fontSize: 20 }}
                  color={Colors.ash}
                ></MaterialCommunityIcons>
              </TouchableOpacity>
            </View>
            <View flex-5>
              <Carousel pageWidth={230}>
                <Card padding-15 style={{ backgroundColor: Colors.primary }}>
                  <View row marginB-40 padding-5>
                    <View flex left>
                      <Image
                        assetName="usa"
                        style={{ width: 40, height: 40, borderRadius: 40 }}
                      />
                    </View>
                    <View flex right>
                      <Text style={{ color: Colors.white, fontSize: 13 }}>
                        USD
                      </Text>
                    </View>
                  </View>
                  <View padding-5>
                    <Text
                      marginB-5
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        color: Colors.white,
                      }}
                    >
                      $5,300.20
                    </Text>
                    <Text style={{ color: Colors.ash, fontSize: 13 }}>
                      US Dollars
                    </Text>
                  </View>
                </Card>

                <Card padding-15 style={{ backgroundColor: Colors.white }}>
                  <View row marginB-40 padding-5>
                    <View flex left>
                      <Image
                        assetName="nigeria"
                        style={{ width: 40, height: 40, borderRadius: 40 }}
                      />
                    </View>
                    <View flex right>
                      <Text style={{ color: Colors.primary, fontSize: 13 }}>
                        NGN
                      </Text>
                    </View>
                  </View>
                  <View padding-5>
                    <Text
                      marginB-5
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        color: Colors.primary,
                      }}
                    >
                      N5,300.20
                    </Text>
                    <Text style={{ color: Colors.ash, fontSize: 13 }}>
                      Nigerian Naira
                    </Text>
                  </View>
                </Card>
              </Carousel>
            </View>
          </View>
        </View>
        <View marginV-20>
          <Carousel pageWidth={230}>
            <Card padding-15>
              <View absR style={{ right: -5, zIndex: 3, elevation: 3 }}>
                <MaterialCommunityIcons
                  name="check-decagram"
                  style={{
                    zIndex: 3,
                    elevation: 3,
                    fontSize: 16,
                    color: Colors.primary,
                  }}
                />
              </View>
              <View row>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Avatar {...profile} />
                </View>
                <View paddingH-12>
                  <View>
                    <Text text90>Ajose22</Text>
                  </View>
                  <View
                    paddingV-5
                    style={{
                      borderBottomColor: "#E9EAED",
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text text90 grey40>
                      has 200 USD
                    </Text>
                  </View>
                  <View paddingV-5>
                    <Text text90 grey40>
                      needs NGN@544
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
            <Card padding-15>
              <View absR style={{ right: -5, zIndex: 3, elevation: 3 }}>
                <MaterialCommunityIcons
                  name="check-decagram"
                  style={{
                    zIndex: 3,
                    elevation: 3,
                    fontSize: 16,
                    color: Colors.primary,
                  }}
                />
              </View>
              <View row>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Avatar {...profile} />
                </View>
                <View paddingH-12>
                  <View>
                    <Text text90>Ajose22</Text>
                  </View>
                  <View
                    paddingV-5
                    style={{
                      borderBottomColor: "#E9EAED",
                      borderBottomWidth: 1,
                    }}
                  >
                    <Text text100 grey40>
                      has 200 Usd
                    </Text>
                  </View>
                  <View paddingV-5>
                    <Text text100 grey40>
                      needs NGN@544
                    </Text>
                  </View>
                </View>
              </View>
            </Card>
          </Carousel>
        </View>
        <View
          padding-20
          style={{
            backgroundColor: Colors.white,
            minHeight: "50%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View>
            <Text text60 grey40>
              Recent Transactions
            </Text>
          </View>
          <View marginV-10>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Exchange"
        component={Feed}
        options={{
          tabBarLabel: "Exchange",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="repeat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Send"
        component={Feed}
        options={{
          tabBarLabel: "Xend",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="send" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Feed}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Feeds"
        component={Feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
