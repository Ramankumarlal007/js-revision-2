
let myyoutubechannel = "raman@youtube.com";
let anotheryoutubeChannnel = myyoutubechannel;

anotheryoutubeChannnel = "rishabh@youtube.com";

// console.log(myyoutubechannel);
// console.log(anotheryoutubeChannnel);


let userOne = {
    email : "rishabh@gmail.com",
    upi : "rishabh@hdfc"
};

let usertwo = userOne;
// console.log(usertwo);

//  usertwo = {
//     email : "raman@gmail.com",
//     upi : "raman@hdfc"
// };
// console.log(usertwo);
// console.log(userOne);

usertwo.email = "kairab@yahoo.com";
usertwo.upi = "kairab@ybl"

console.log(usertwo);