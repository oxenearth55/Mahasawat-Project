# Mahasawat-Project

Structure of code folders:
1. front-end folder – contains the front-end web development folders<br/>
		1.1 public
		1.2 src
			1.2.1 admin – contains the admin files
			1.2.2 auth – contains the auth files
			1.2.3 core – contains the core files
			1.2.4 photo – contains the photo files
			1.2.5 shop – contains the shop files
			1.2.6 user – contains the user files
2. main – contains the app and back-end web development folders
	2.1 controllers – contains the controller files
	2.2 helpers – contains an error handler file
	2.3 models – contains the model file
	2.4 routes – contains the router files
	2.5 validator – contain a validator file

Programs:
	Robo3T – use as the mongoDB GUI
Source: https://robomongo.org/download
	VSCode – use to write code for the web development.
Source: https://code.visualstudio.com/download

Setting up the project:
1. Clone the git from the Mahasawat Project repository.
Source: https://github.com/oxenearth55/Mahasawat-Project.git
2. Setting up inside the front-end folder
		2.1 Install react npm
		2.2 Install front-end npm
		2.3 Create .env file and write down the code below
REACT_APP_API_URL = http://localhost:49154/api 
SKIP_PREFLIGHT_CHECK = true 
	2.4 Run the command: “npm start”
3. Setting up inside the main folder
		3.1 Install back-end npm
		3.2 Create .env file and write down the code below
PORT = 49154 
		3.3 Run the command: “npm start”
