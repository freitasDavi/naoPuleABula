import React from "react";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";
import HomePage from "./components/HomePage";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "./services/context";
import Tabs from "./components/navigation/tabs";

const AuthStack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState();

  const authContext = React.useMemo(() => {
    return {
      signIn: (token) => {
        setIsLoading(false);
        setUserToken(token);
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("te");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Text>Carregando</Text>;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <AuthStack.Navigator>
            <AuthStack.Screen name="HomePage" component={Tabs} />
          </AuthStack.Navigator>
        ) : (
          <AuthStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Login"}
          >
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Cadastro" component={Cadastro} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
