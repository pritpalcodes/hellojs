console.log("Satsriakal saareyan nu!");     

//node.js runs all the functions of js in our cmd, however all the DOM related functions will not be executed like.... window, alert(), etc... coz duh, obviously

// console.log(window);//ReferenceError: window is not defined
// console.log(alert("Hey"));////ReferenceError: alert is not defined

/*
    npm is a package manager for js
    so instead of writing custom commands to initialise files all the time, 
    write a script to run all the necessary files, and just call that script...


    as in the case, we created a command "pritpals_command" in the package.json
    and just called in using 
    --> npm run pritpals_command
    this then went of and executed whatever was written in front of it... ie. ran the "hello.js"

    to aise aap servers bana sakte ho and basically you can do what not!

    so why do we need this? aise samjho that before a project, you need to configure a lot of thigns, and for that this methodology will come handy, and thus, we learn this, 
    eg you are creating an e-commerce website, and for that you have to create a connection with the databse, configure the react-appn, form a link b.w the frontend nd the backend... and so on, so this is how it goes.
    and ye sb manually krna bahut tricky task h, just create a "start" command, ie write a script for this to automate this, and run that script!

    :)
*/