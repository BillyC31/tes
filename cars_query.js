const {Cars}= require('./models');

// Query Insert Single Data : create
// Query Insert Multiple Data : bulkCreate (yg dikirimkan array of object)
// Cars.bulkCreate([{nama:'Avanza',price:450000,ukuran:5},{nama:'Avanza2',price:450000,ukuran:5}]).then((data)=>console.log(data));


// Query Select : findAll (semua)
// Cars.findAll().then((data)=>console.log(data))

// Query Select : findAll({where:{kondisi *bsa multiple}})
// Cars.findAll({where:{id:2}}).then((data)=>console.log(data))

// Query Select : findByPk (primary key)
// Cars.findByPk(4).then((data)=>console.log(data))

// Query Update :update
// Cars.update({nama:'Inova'},{where:{id:3}}).then((data)=>console.log(data))

// Query utk restart identity/ id database
// tambahkan truncate:true, restartIdentity:true
// Query Drop : destroy
Cars.destroy({where:{id:3}}).then((data)=>console.log(data))