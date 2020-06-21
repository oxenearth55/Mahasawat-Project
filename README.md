# Mahasawat-Project

Structure of code folders:
1. front-end folder – contains the front-end web development folders<br/>
		1.1 public<br/>
		1.2 src<br/>
			1.2.1 admin – contains the admin files<br/>
			1.2.2 auth – contains the auth files<br/>
			1.2.3 core – contains the core files<br/>
			1.2.4 photo – contains the photo files<br/>
			1.2.5 shop – contains the shop files<br/>
			1.2.6 user – contains the user files<br/>
2. main – contains the app and back-end web development folders<br/>
	2.1 controllers – contains the controller files<br/>
	2.2 helpers – contains an error handler file<br/>
	2.3 models – contains the model file<br/>
	2.4 routes – contains the router files<br/>
	2.5 validator – contain a validator file<br/>

Programs:<br/>
	Robo3T – use as the mongoDB GUI<br/>
Source: https://robomongo.org/download<br/>
	VSCode – use to write code for the web development.<br/>
Source: https://code.visualstudio.com/download

Setting up the project:
1. Clone the git from the Mahasawat Project repository.<br/>
Source: https://github.com/oxenearth55/Mahasawat-Project.git<br/>
2. Setting up inside the front-end folder<br/>
		2.1 Install react npm<br/>
		2.2 Install front-end npm<br/>
		2.3 Create .env file and write down the code below<br/>
REACT_APP_API_URL = http://localhost:49154/api <br/>
SKIP_PREFLIGHT_CHECK = true<br/>
	2.4 Run the command: “npm start”<br/>
3. Setting up inside the main folder<br/>
		3.1 Install back-end npm<br/>
		3.2 Create .env file and write down the code below<br/>
PORT = 49154<br/>
		3.3 Run the command: “npm start”<br/>
