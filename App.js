import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './Home'
import ResS from './Screens/SpanishQuiz/ResultSpanish'
import ResultScience from './Screens/ScienceQuiz/ResultScience'
import Catalog from'./Catalog'
import QuizFeedback from './Screens/QuizEngine/QuizFeedback'
import QuizIntro from './Screens/QuizEngine/QuizIntro'
import QuizQuestion from './Screens/QuizEngine/QuizQuestion'
import QuizResult from './Screens/QuizEngine/QuizResult'
import Quizzes from './Screens/SpanishQuiz/Quizzes'
import Game from './Screens/SpanishQuiz/Game'
import WrongScreen from './Screens/SpanishQuiz/WrongScreen'
import CorrectScreen from './Screens/SpanishQuiz/CorrectScreen'
import NewScreen from './Screens/SpanishQuiz/NewScreen'
import MathQuiz from './Screens/MathQuiz/MathQuiz'
import OneScreen from './Screens/MathQuiz/OneScreen'
import TwoScreen from './Screens/MathQuiz/TwoScreen'
import ThreeScreen from './Screens/MathQuiz/ThreeScreen'
import FourScreen from './Screens/MathQuiz/FourScreen'
import ScienceQuiz from './Screens/ScienceQuiz/ScienceQuiz'
import OneQuiz from './Screens/ScienceQuiz/OneQuiz'
import LanguageArts from'./Screens/LanguageArtsQuiz/LanguageArts'
import ScreenOne from './Screens/LanguageArtsQuiz/ScreenOne'
import CodingQuiz from './Screens/CodingQuiz/CodingQuiz'
import CorrectCoding from './Screens/CodingQuiz/CorrectCoding'
import One from './Screens/CodingQuiz/One'
import Two from './Screens/CodingQuiz/Two'
import Three from './Screens/CodingQuiz/Three'
import Four from './Screens/CodingQuiz/Four'
import ThirdQuestion from './Screens/SpanishQuiz/ThirdQuestion'
import FourthQuestion from'./Screens/SpanishQuiz/FourthQuestion'
import CorrectScreenScience from './Screens/ScienceQuiz/CorrectScreenScience'
import TwoQuiz from './Screens/ScienceQuiz/TwoQuiz'
import ThreeQuiz from './Screens/ScienceQuiz/ThreeQuiz'
import FourQuiz from './Screens/ScienceQuiz/FourQuiz'
import ScreenTwo from './Screens/LanguageArtsQuiz/ScreenTwo'
import ScreenThree from './Screens/LanguageArtsQuiz/ScreenThree'
import ScreenFour from './Screens/LanguageArtsQuiz/ScreenFour'
import Basketbal1Quiz from './Screens/Basketball/BasketballQuiz'
import CorrectBasketball from './Screens/Basketball/CorrectBasketball'
import OneQuestion from './Screens/Basketball/OneQuestion'
import TwoQuestion from './Screens/Basketball/TwoQuestion'
import ThreeQuestion from './Screens/Basketball/ThreeQuestion'
import FourQuestion from './Screens/Basketball/FourQuestion'
import HistoryQuiz from './Screens/HistoryQuiz/HistoryQuiz'
import FirstQuiz from './Screens/HistoryQuiz/FirstQuiz'
import SecondQuiz from './Screens/HistoryQuiz/SecondQuiz'
import ThirdQuiz from './Screens/HistoryQuiz/ThirdQuiz'
import FourthQuiz from './Screens/HistoryQuiz/FourthQuiz'
import MoviesQuiz from './Screens/MoviesQuiz/MoviesQuiz'
import FirstQuestion from './Screens/MoviesQuiz/FirstQuestion'
import CorrectMovie from './Screens/MoviesQuiz/CorrectMovie'
import SecondQuestion from './Screens/MoviesQuiz/SecondQuestion'
import TresQuestion from './Screens/MoviesQuiz/TresQuestion'
import CuatroQuestion from './Screens/MoviesQuiz/CuatroQuestion'
import FruitsQuiz from './Screens/FruitsQuiz/FruitsQuiz'
import UnoQuiz from './Screens/FruitsQuiz/UnoQuiz'
import DosQuiz from './Screens/FruitsQuiz/DosQuiz'
import CorrectFruits from './Screens/FruitsQuiz/CorrectFruits'
import TresScreen from './Screens/FruitsQuiz/TresScreen'
import CuatroScreen from './Screens/FruitsQuiz/CuatroScreen'
import ResultMovie from './Screens/MoviesQuiz/ResultMovie'
import ResultMath from './Screens/MathQuiz/ResultMath'
import ResultLA from './Screens/LanguageArtsQuiz/ResultLA'
import CorrectMath from './Screens/MathQuiz/CorrectMath'
import CorrectLA from './Screens/LanguageArtsQuiz/CorrectLA'
import CorrectHistory from './Screens/HistoryQuiz/CorrectHistory'
import ResultHistory from './Screens/HistoryQuiz/ResultHistory'
import ResultFruits from './Screens/FruitsQuiz/ResultFruits'
import ResultCoding from './Screens/CodingQuiz/ResultCoding'
import ResultBasketball from './Screens/Basketball/ResultBasketball'
import WrongScreenScience from './Screens/ScienceQuiz/WrongScreenScience'
import WrongScreenMovie from './Screens/MoviesQuiz/WrongScreenMovie'
import WrongScreenLA from './Screens/LanguageArtsQuiz/WrongScreenLA'
import WrongScreenMath from './Screens/MathQuiz/WrongScreenMath'
import WrongScreenHistory from './Screens/HistoryQuiz/WrongScreenHistory'
import WrongScreenFruits from './Screens/FruitsQuiz/WrongScreenFruits'
import WrongScreenCoding from './Screens/CodingQuiz/WrongScreenCoding'
import WrongScreenBasketball from './Screens/Basketball/WrongScreenBasketball'
import FifthQuestion from './Screens/SpanishQuiz/FifthQuestion'
import SixthQuestion from './Screens/SpanishQuiz/SixthQuestion'
import SeventhQuestion from './Screens/SpanishQuiz/SeventhQuestion'
import EighthQuestion from './Screens/SpanishQuiz/EighthQuestion'
import FiveQuiz from './Screens/ScienceQuiz/FiveQuiz'
import SixQuiz from './Screens/ScienceQuiz/SixQuiz'
import SevenQuiz from './Screens/ScienceQuiz/SevenQuiz'
import EightQuiz from './Screens/ScienceQuiz/EightQuiz'
import CincoQuestion from './Screens/MoviesQuiz/CincoQuestion'
import SeisQuestion from './Screens/MoviesQuiz/SeisQuestion'
import SieteQuestion from './Screens/MoviesQuiz/SieteQuestion'
import OchoQuestion from './Screens/MoviesQuiz/OchoQuestion'
import FiveScreen from './Screens/MathQuiz/FiveScreen'
import SixScreen from './Screens/MathQuiz/SixScreen'
import SevenScreen from './Screens/MathQuiz/SevenScreen'
import EightScreen from './Screens/MathQuiz/EightScreen'
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
     <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:true}}>
       <Stack.Screen name="Home" component={Home}
       options={{ 
         title: '⸮Quizzin?' ,headerTitleAlign: 'center'
     
   }}>


       </Stack.Screen>
       <Stack.Screen name="Catalog" component={Catalog}
        options={{ title: 'Catalog' ,headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="QuizIntro" component={QuizIntro}
        options={({route}) => ({
          title: route.params?.quizId ? 'Quiz Details' : 'Quiz',
          headerTitleAlign: 'center',
        })}>

       </Stack.Screen>
       <Stack.Screen name="QuizQuestion" component={QuizQuestion}
        options={{ title: 'Question' ,headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="QuizFeedback" component={QuizFeedback}
        options={{ title: 'Answer' ,headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="QuizResult" component={QuizResult}
        options={{ title: 'Results' ,headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="Quizzes" component={Quizzes}
        options={{ title: 'Spanish Quiz' ,headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="Game" component={Game} options={{title:'Spanish Quiz: First Question',headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="WrongScreen" component={WrongScreen}options={{title:'Spanish Quiz: First Question',headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="CorrectScreen" component={CorrectScreen}options={{title:'Spanish Quiz: First Question',headerTitleAlign: 'center'}}>

       </Stack.Screen>
       <Stack.Screen name="NewScreen" component={NewScreen} options={{title:'Second Question'}}>

       </Stack.Screen>
       <Stack.Screen name="MathQuiz" component={MathQuiz}options={{title:'Math Quiz',headerTitleAlign: 'center'}}></Stack.Screen>

       <Stack.Screen name="OneScreen"  component={OneScreen}options={{title:'Math Quiz: First Question',headerTitleAlign: 'center'}}></Stack.Screen>
       <Stack.Screen name="TwoScreen" component={TwoScreen}></Stack.Screen>
       <Stack.Screen name="ThreeScreen" component={ThreeScreen}options={{title:'Math Quiz: First Question',headerTitleAlign: 'center'}}></Stack.Screen>
       <Stack.Screen name="FourScreen" component={FourScreen}options={{title:'Math Quiz: Fourth Question',headerTitleAlign: 'center'}}></Stack.Screen>
       <Stack.Screen name="ScienceQuiz"  component={ScienceQuiz}options={{title:'Science Quiz',headerTitleAlign: 'center'}}></Stack.Screen>
       <Stack.Screen name="OneQuiz" component={OneQuiz}options={{title:'Science Quiz: First Question',headerTitleAlign: 'center'}}></Stack.Screen>
       <Stack.Screen name="LanguageArts" component={LanguageArts}></Stack.Screen>
       <Stack.Screen name="ScreenOne" component={ScreenOne}></Stack.Screen>
       <Stack.Screen name="CodingQuiz" component={CodingQuiz}></Stack.Screen>
       <Stack.Screen name= "One" component={One}></Stack.Screen>
       <Stack.Screen name= "Two" component={Two}></Stack.Screen>
       <Stack.Screen name= "Three" component={Three}></Stack.Screen>
       <Stack.Screen name= "Four" component={Four}></Stack.Screen>
       <Stack.Screen name= "CorrectCoding" component={CorrectCoding}></Stack.Screen>
       <Stack.Screen name="ThirdQuestion" component={ThirdQuestion}></Stack.Screen>
       <Stack.Screen name="FourthQuestion" component={FourthQuestion}></Stack.Screen>
       <Stack.Screen name="CorrectScreenScience" component={CorrectScreenScience}></Stack.Screen>
       <Stack.Screen name="TwoQuiz" component={TwoQuiz}></Stack.Screen>
       <Stack.Screen name="ThreeQuiz" component={ThreeQuiz}></Stack.Screen>
       <Stack.Screen name="FourQuiz" component={FourQuiz}></Stack.Screen>
       <Stack.Screen name="ScreenTwo" component={ScreenTwo}></Stack.Screen>
       <Stack.Screen name="ScreenThree" component={ScreenThree}></Stack.Screen>
       <Stack.Screen name="ScreenFour" component={ScreenFour}></Stack.Screen>
       <Stack.Screen name="BasketballQuiz" component={Basketbal1Quiz}></Stack.Screen>
       <Stack.Screen name="CorrectBasketball" component={CorrectBasketball}></Stack.Screen>
       <Stack.Screen name="OneQuestion" component={OneQuestion}></Stack.Screen>
       <Stack.Screen name="TwoQuestion" component={TwoQuestion}></Stack.Screen>
       <Stack.Screen name="ThreeQuestion" component={ThreeQuestion}></Stack.Screen>
       <Stack.Screen name="FourQuestion" component={FourQuestion}></Stack.Screen>
       <Stack.Screen name="HistoryQuiz" component={HistoryQuiz}></Stack.Screen>
       <Stack.Screen name="FirstQuiz" component={FirstQuiz}></Stack.Screen>
       <Stack.Screen name="SecondQuiz" component={SecondQuiz}></Stack.Screen>
       <Stack.Screen name="ThirdQuiz" component={ThirdQuiz}></Stack.Screen>
       <Stack.Screen name="FourthQuiz" component={FourthQuiz}></Stack.Screen>
       <Stack.Screen name="MoviesQuiz" component={MoviesQuiz}></Stack.Screen>
       <Stack.Screen name="FirstQuestion" component={FirstQuestion}></Stack.Screen>
       <Stack.Screen name="SecondQuestion" component={SecondQuestion}></Stack.Screen>
       <Stack.Screen name="CorrectMovie" component={CorrectMovie}></Stack.Screen>
       <Stack.Screen name="TresQuestion" component={TresQuestion}></Stack.Screen>
       <Stack.Screen name="CuatroQuestion" component={CuatroQuestion}></Stack.Screen>
       <Stack.Screen name="FruitsQuiz" component={FruitsQuiz}></Stack.Screen>
       <Stack.Screen name="UnoQuiz" component={UnoQuiz}></Stack.Screen>
       <Stack.Screen name="DosQuiz" component={DosQuiz}></Stack.Screen>
       <Stack.Screen name="CorrectFruits" component={CorrectFruits}></Stack.Screen>
       <Stack.Screen name="TresScreen" component={TresScreen}></Stack.Screen>
       <Stack.Screen name="CuatroScreen" component={CuatroScreen}></Stack.Screen>
        <Stack.Screen name="ResultSpanish" component={ResS}></Stack.Screen>
        <Stack.Screen name="ResultScience" component={ResultScience}></Stack.Screen>
        <Stack.Screen name="ResultMovie" component={ResultMovie}></Stack.Screen>
      <Stack.Screen name="ResultMath" component={ResultMath}></Stack.Screen>
      <Stack.Screen name="CorrectMath" component={CorrectMath}></Stack.Screen>
      <Stack.Screen name="ResultLA" component={ResultLA}></Stack.Screen>
      <Stack.Screen name="CorrectLA" component={CorrectLA}></Stack.Screen>
      <Stack.Screen name="ResultHistory" component={ResultHistory}></Stack.Screen>
      <Stack.Screen name="CorrectHistory" component={CorrectHistory}></Stack.Screen>
      <Stack.Screen name="ResultFruits" component={ResultFruits}></Stack.Screen>
    <Stack.Screen name="ResultCoding" component={ResultCoding}></Stack.Screen>
    <Stack.Screen name="ResultBasketball" component={ResultBasketball}></Stack.Screen>
    
<Stack.Screen name="WrongScreenScience" component={WrongScreenScience}></Stack.Screen>
<Stack.Screen name="WrongScreenMovie" component={WrongScreenMovie}></Stack.Screen>
<Stack.Screen name="WrongScreenMath" component={WrongScreenMath}options={{title:'Math: Wrong Screen',headerTitleAlign: 'center'}}></Stack.Screen>
<Stack.Screen name="WrongScreenLA" component={WrongScreenLA}></Stack.Screen>
<Stack.Screen name="WrongScreenBasketball" component={WrongScreenBasketball}></Stack.Screen>
 <Stack.Screen name="WrongScreenFruits" component={WrongScreenFruits}></Stack.Screen>
 <Stack.Screen name="WrongScreenCoding" component={WrongScreenCoding}></Stack.Screen>
 <Stack.Screen name="WrongScreenHistory" component={WrongScreenHistory}></Stack.Screen>
  <Stack.Screen name="FifthQuestion" component={FifthQuestion}></Stack.Screen>
  <Stack.Screen name="SixthQuestion" component={SixthQuestion}></Stack.Screen>
  <Stack.Screen name="SeventhQuestion" component={SeventhQuestion}></Stack.Screen>
  <Stack.Screen name="EighthQuestion" component={EighthQuestion}></Stack.Screen>
  
  <Stack.Screen name="FiveQuiz" component={FiveQuiz}></Stack.Screen>
  <Stack.Screen name="SixQuiz" component={SixQuiz}></Stack.Screen>
  <Stack.Screen name="SevenQuiz" component={SevenQuiz}></Stack.Screen>
  <Stack.Screen name="EightQuiz" component={EightQuiz}></Stack.Screen>
    <Stack.Screen name="CincoQuestion" component={CincoQuestion}></Stack.Screen>
      <Stack.Screen name="SeisQuestion" component={SeisQuestion}></Stack.Screen>
        <Stack.Screen name="SieteQuestion" component={SieteQuestion}></Stack.Screen>
          <Stack.Screen name="OchoQuestion" component={OchoQuestion}></Stack.Screen>

<Stack.Screen name="FiveScreen" component={FiveScreen}></Stack.Screen>
  <Stack.Screen name="SixScreen" component={SixScreen}></Stack.Screen>
  <Stack.Screen name="SevenScreen" component={SevenScreen}></Stack.Screen>
  <Stack.Screen name="EightScreen" component={EightScreen}></Stack.Screen>



     </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    

    
  );
}
