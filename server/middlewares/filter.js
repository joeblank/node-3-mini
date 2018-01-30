let notAllowed = ['a', 'e', 'i'];

module.exports = function(req, res, next) {

    if (req.method === 'POST' || req.method === "PUT") {
        while ( notAllowed.find( word => req.body.text.includes(word) ) ) {

            const badWord = notAllowed.find( word => req.body.text.includes(word) );
    
            req.body.text = req.body.text.replace( badWord, '*'.repeat( badWord.length ) );
          }
    }


      next();

}