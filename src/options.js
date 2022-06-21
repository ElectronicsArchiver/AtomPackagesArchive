
const { log } = console;


/*
 *  Options will allow for choices on what to backup.
 */

function parseArgv(raw){

    const parsed = {
        status : true ,
        backup : 'ALL'
    }

    if(raw.length < 1){
        log('No Arguments passed. Defaulting to ALL');
        return parsed;
    }

    const backup = raw
        .find((argument) => argument.startsWith('--backup'));
        
    if(backup)
        parsed.backup = backup.split('=')[1];

    return parsed;
}


module.exports = { parseArgv };
