We are aiming to build a cross platform mobile app named as ' VeggieVision '. The basic idea of this app is to use the phones camera to scan fruits and vegetables, and when the scanning is done then it will fetch a food recipe which includes the fruits and vegetables scanned and display it to the user. After any food recipe is fetched then that recipe should be stored in the ' Saved Recipe ' tab of the app.

1. User authentication (React native, passport.js) : Start with setting up a user authentication system which should allow users to sign up and log in securely.

2. Database (Node.js, MongoDB): Set up a MongoDB database using Node.js. The database should store the list of  fruits and vegetables scanned by the particular user.

3.  API's (Node.js): Use spoonacular api to fetch the recipe data and show it to the user.

4. Object Detection (Tensorflow):  There are various options for this, including using pre-trained machine learning models for object detection and image classification. One popular choice is to use a deep learning framework like TensorFlow. This will be used for identifying fruits and vegetables through the camera.

5. Dark themed user interface (React Native): Finally design a modern, responsive and dark themed user interface. Make sure its visually appealing, easy to navigate, and consistent across all tabs of the app.

Node.js, MongoDB and the API will constitute the backend of the application, while the user-facing features will form the frontend, built with React Native. Throughout the development process, ensure proper documentation and comments in the code to make it easy to understand and maintain. 

After the login into the app, There should be a specific button, which after clicked will open the camera of the app for scanning the fruits and vegetables. and while the objects are being scanned there should be list created in the side where it shows the names of all the fruits and vegetables scanned. There should be one more button during scanning which after clicked will stop the scan.
After the scanning is done allow the user to view the scanned items list and if they want to make some changes manually then they can, else click submit, which then will use the API to fetch 1 food recipe and display it to the user. If we want to see more food recipe then there should be a button ' give more ' which will again make the API to fetch another food recipe, and display it below the previous one.