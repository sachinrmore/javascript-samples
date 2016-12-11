var errObj = { message : "This is an error"};

//We can throw object of any datatype like string, number, object etc as error object
//only one catch is allowed.

try    {
        
    throw errObj;
    }
catch(err){
   
    console.log(err.message);
}
finally{
    "finally block executed."
}

try    {
        
    throw "This is an error";
    }
catch(err){
   
    console.log(err);
}
finally{
    "finally block executed."
}
    