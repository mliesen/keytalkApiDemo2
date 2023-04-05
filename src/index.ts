import kt from "keytalk-api";

async function main() {
    var eng = new kt.engine.KeyTalkEngine();
    eng.url = "http://keytalkqa.volvocars.net:81/";
    console.log("connecting");
    try {
        await eng.login("keylogic", "freda..");
        try {
            console.log("getting value (current time)");
            let v = await eng.requestAsync("*time").promise();
            console.log(v.asDateTime());
            console.log("logging out");
        } finally {
            await eng.logout().promise();
        }
    } catch(e) {
        console.error("Failed",e);
    }
    console.log("end");
}


main();