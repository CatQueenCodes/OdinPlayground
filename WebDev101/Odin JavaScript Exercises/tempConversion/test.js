const ftoc = function(temp) {

    let formula = (temp - 32) * 5/9;
    
    return (Math.floor(formula * 10)/10);
    }

    ftoc (100);
    




    const ftoc = function(temp) {

        let formula = (temp - 32) * 5/9;
        
        return (Math.round(formula * 10)/10);
        }
      
        
      
      
      const ctof = function(temp) {
      
      let formula = (temp * 9/5) + 32;
      
      return (Math.round(formula * 10)/10);
      }
      
      module.exports = {
        ftoc,
        ctof
      }