// ⬇️ ye jo niche define kiye hai ye wrapAsync hai jo server side ka error ko handles karta hai

module.exports = (fn) => {
    return(req,res,next) =>{
        fn(req,res,next).catch(next);
    };
}