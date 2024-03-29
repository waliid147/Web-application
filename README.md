 Random Advice Web Application
----------------------------------------------------------------------------------------------------------
This 'Web-application' repository contains files needed to create a simple web app where users can view randomly generated advice fetched from an external API (api.adviceslip.com/advice). Users will also be able to generate new advice and listen to the displayed using TTS (text-to-speech) through the two available buttons. Below are the installation and run instructions to help you set up and run the web app on your computer.
----------------------------------------------------------------------------------------------------------
PREREQUISITES:
* Git
* VS Code
----------------------------------------------------------------------------------------------------------
INSTALLATION:
CLONE THE RESPOSITORY: 
* In the repository home page, click 'Code' button and copy the HTTPS URL.
* Navigate to the folder that you want to store the project in on your computer.
* Right click an area within the folder and open Git Bash (can be found under 'show more options') there.
* Write the following in Git Bash "git clone HTTPS URL" and press enter.
---------------------------------------------------------------------------------------------------------
RUN INSTRUCTIONS:
1) OPEN THE CODE FOLDER: which can be found within the 'web-application' folder you just set up. There, you will find the HTML, CSS, & JavaScript files. Or write the following in git "cd web-application' and press enter.
2) 2 ways of viewing the website:
   * USING A WEB BROWSER: simply double-click the HTML file and the web site will be displayed in your default web browser.
   * USING LIVE SERVER: which a VS Code extension that acts as a local development server. So, download Live Server through VS code as an extention, open the HTML with VS code (right-click the file and select 'Open with' then VS code), and then right-click on the  file and select 'Open with Live Server'.
3) USING THE WEB APP: once the web app is running, a default advice will be displayed within the text box and you'll b eable to generate a new advice and listen to the displayed advice using the "New Advice" and Listen buttons. respectively.
-----------------------------------------------------------------------------------------------------------
ADDITIONAL NOTES:
* Open the files through VS code and further develop the web app if you feel like it.
* Since an external API is used, make sure you have an internet connection while using the web app
* Make sure that SpeechSynthesis API for the TTS is supported within your web browser.


