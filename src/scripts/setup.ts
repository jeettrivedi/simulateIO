const { copyFileSync } = require('fs');

try{
    copyFileSync('.env.development.example', '.env.development.local');
    copyFileSync('.env.production.example', '.env.production.local');
}catch(error){
    console.log(error);
}