# Quizzins: A Quiz Application built using React-Native JavaScript

## Development

This project is being upgraded to Expo SDK 56. After installing Node.js with npm available, run:

```sh
npm install
npx expo install --fix
npx expo-doctor@latest
npx expo start
```

## 1) 9 different categories that range from academics to leisure
  - Math, Science, Fruits, History, Basketball, Spanish, Language Arts, Movies, and Coding
  - Each category has at least 4 questions
## 2) Utilization of React-Native Components:
  - Stack Navigation and Props: buttons navigating to different screens
  - UseRoute(): calculates the total score by adding scores of each question (0 pts = wrong, 5pts = right)
    
## 3) Important Screens   
  - Wrong Screen: a red background screen with text displaying, "Wrong Answer! Next Question.", and an image with text, "OOPS!"
  - Correct Screen: a green background screen with text displaying, "Correct Answer! Good Job.", along with an image with text, "Great Job!"
  - Final Screen: end screen that displays your score out of the total score possible from useRoute()
  - Catalog: list of quiz categories to view from by utilizing TextInput
  - Quiz Details: A screen is shown before taking the quiz, with details on the quiz and two different buttons to choose from. ("Back" or "Start Quiz")
  - Home: A screen with text and images that explain what the application is about
  - Quiz Page: A screen with one question, an image resembling the question, and 4 different buttons as options (TouchableOpacity)

# Final Screen:
![Screenshot 2024-08-09 at 4 24 50 PM](https://github.com/user-attachments/assets/3d3e2fcf-7fb8-43d5-933b-1e9f5d8b35d7)
# Wrong Screen:
![Screenshot 2024-08-09 at 4 24 18 PM](https://github.com/user-attachments/assets/1f836eef-c0c4-4cdd-a9b3-7adab8fe469a)
# Correct Screen:
![Screenshot 2024-08-09 at 4 24 00 PM](https://github.com/user-attachments/assets/60fc1331-abc5-40da-a53a-9fc224421367)
# Quiz Page:
![Screenshot 2024-08-09 at 4 23 42 PM](https://github.com/user-attachments/assets/e39f7b29-6b55-4413-95fc-74aec85307b2)
# Quiz Details:
![Screenshot 2024-08-09 at 4 23 24 PM](https://github.com/user-attachments/assets/3ecd8e53-48ad-48ce-a380-9284d12b709c)
# Catalog:
![Screenshot 2024-08-09 at 4 22 59 PM](https://github.com/user-attachments/assets/e5afadfc-dfcc-41ff-b372-2b6d643db003)
# Home:
![Screenshot 2024-08-09 at 4 22 35 PM](https://github.com/user-attachments/assets/024043d6-d78a-47ab-a390-be520068eeff)
