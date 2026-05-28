const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');
const axios = require('axios');
const os = require('os');

const { exec } = require('child_process');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(text, color = chalk.white) {

    for (const char of text) {

        process.stdout.write(color(char));

        await sleep(20);
    }

    console.log();
}

async function progressBar() {

    process.stdout.write(
        chalk.cyan('\nBOOTING SYSTEM ')
    );

    for (let i = 0; i <= 30; i++) {

        process.stdout.write(
            chalk.green('█')
        );

        await sleep(70);
    }

    console.log(
        chalk.green(' 100%\n')
    );
}

async function getWeather() {

    try {

        const response = await axios.get(
            'https://wttr.in/SaoPaulo?format=j1'
        );

        const weather = response.data.current_condition[0];

        console.log(
            chalk.yellow('════════ WEATHER ════════')
        );

        console.log(
            chalk.white(
                `TEMP: ${weather.temp_C}°C`
            )
        );

        console.log(
            chalk.white(
                `CONDITION: ${weather.weatherDesc[0].value}`
            )
        );

        console.log(
            chalk.white(
                `HUMIDITY: ${weather.humidity}%`
            )
        );

        console.log(
            chalk.white(
                `WIND: ${weather.windspeedKmph} km/h`
            )
        );

        console.log(
            chalk.yellow('═════════════════════════\n')
        );

    } catch {

        console.log(
            chalk.red('Weather service offline.\n')
        );
    }

}

function systemInfo() {

    const totalMem =
        (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);

    const freeMem =
        (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

    console.log(
        chalk.gray(
            `TIME: ${new Date().toLocaleTimeString()}`
        )
    );

    console.log(
        chalk.gray(
            `USER: ${os.userInfo().username}`
        )
    );

    console.log(
        chalk.gray(
            `OS: ${os.platform()} ${os.release()}`
        )
    );

    console.log(
        chalk.gray(
            `CPU: ${os.cpus()[0].model}`
        )
    );

    console.log(
        chalk.gray(
            `RAM FREE: ${freeMem} GB / ${totalMem} GB\n`
        )
    );
}

async function fakeLogs() {

    const logs = [
        'Loading neural interface...',
        'Checking encrypted protocols...',
        'Syncing cloud memory...',
        'Mounting virtual drives...',
        'Injecting runtime modules...',
        'Verifying operator credentials...',
        'Establishing secure connection...',
        'Finalizing boot sequence...'
    ];

    for (const item of logs) {

        process.stdout.write(
            chalk.gray(`> ${item}`)
        );

        await sleep(700);

        console.log(
            chalk.green(' OK')
        );
    }
}



async function terminalCommands() {

    const answer = await inquirer.prompt([
        {
            type: 'input',
            name: 'cmd',
            message: chalk.cyan('SYSTEM >')
        }
    ]);

    switch(answer.cmd.toLowerCase()) {

        case 'clear':

            console.clear();

            boot();

            break;

        case 'shutdown':

            await typeText(
                'Shutting down system...',
                chalk.red
            );

            process.exit();

            break;

        case 'status':

            systemInfo();

            terminalCommands();

            break;

        case 'clima':

            console.clear();

            getWeather();

            terminalCommands();

            break;

        

        default:

            console.log(
                chalk.red('Unknown command.\n')
            );

            terminalCommands();
    }
}

async function menu() {

    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'mode',
            message: 'SELECT OPERATION MODE',
            choices: [
                'WORK MODE',
                'PROGRAM MODE',
                'STUDY MODE',
                'TERMINAL MODE',
                'WEATHER',
                'EXIT'
            ]
        }
    ]);

    switch(answer.mode) {

        case 'WORK MODE':

            console.log(
                chalk.yellow('\nSTARTING WORK MODE...\n')
            );

            exec('py autos/work.py');

            break;

        case 'PROGRAM MODE':

            console.log(
                chalk.blue('\nSTARTING PROGRAM MODE...\n')
            );


            exec('py autos/program.py');

            break;

        case 'STUDY MODE':

            console.log(
                chalk.red('\nSTARTING STUDY MODE...\n')
            );


            exec('py autos/study.py');

            break;

        case 'TERMINAL MODE':

            console.clear();

            await typeText(
                'Interactive terminal enabled.\n',
                chalk.green
            );

            terminalCommands();

            break;
        
        case 'WEATHER':

            console.clear();

            await typeText(
                'Interactive WEATHER enabled.\n',
                chalk.green
            );


            await getWeather();


            menu()


            break;

        case 'EXIT':

            process.exit();
    }
}

async function boot() {

    console.clear();

    console.log(
        chalk.cyan(
            figlet.textSync('CODEX SYSTEM')
        )
    );

    console.log(
        chalk.green(
            '[ SYSTEM INITIALIZING V 2.0 ]\n'
        )
    );

    systemInfo();

    await fakeLogs();

    await progressBar();


    await typeText(
        'WELCOME BACK, RAUL.\n',
        chalk.cyan
    );

    menu();
}

boot();