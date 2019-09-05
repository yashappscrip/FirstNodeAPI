module.exports = function(app,db){
    app.get('/notes',(req,res)=>{
        console.log(req.body);
        var note = {text:req.body.body,title: req.body.title}
        // var collections = db.collections('notes');
        db.collection('notes').insert(note,(err,results)=>{
           if(err){
               res.send({'error':' Error!'});
           }
           else{
            //    note;
               res.send(results.ops[0]);
           }
        });
        res.send("Routes section");
    });
}