function sendEmailNotification(email){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`Sending email to ${email}`);
    },1000);
  });
}

sendEmailNotification("myMail@ohmail.come").then((x)=>{console.log(x)});

console.log("not waiting");