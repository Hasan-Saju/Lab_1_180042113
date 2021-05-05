// importing os
const os =require("os");

const userInfo=os.userInfo();
console.log(userInfo);

// time spend till now
const upTime=os.uptime();
console.log(upTime);

// server os info
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);