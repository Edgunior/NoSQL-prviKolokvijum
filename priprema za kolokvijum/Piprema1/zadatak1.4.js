db.getCollection("projekti").find({
   tim: {
       $elemMatch: {
           sati: {$gt: 15},
           zavrsen: false
       }
   }
}, {})
