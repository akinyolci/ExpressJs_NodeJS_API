const router = require('express').Router();
let data = require('../data.js');
const Aktor = require('../data/data-model');

router.get("/", (req,res,next) => {
    const {id} = req.params;

    Aktor.findAktorById(id).then((aktor)=>{
        if(aktor){
            res.status(200).json(aktor);

        } else{
            next({
                statusCode:400,
                errorMessage: "aktor bulunmamadı",
            })
        }
    }).catch((error)=> {
        next({
            error: 400,
            errorMessage: "aktor bulunurken hata oluştu",
            error,
        });
    });
});

router.post("/", (req,res, next) => {
    const yeniAktor = req.body;
    if (!yeniAktor.isim){
        next({
            statusCode: 400,
            errorMessage: "aktor ismi gir"
        });
    } else{
        Aktor.addAktor(yeniAktor)
        .then((added) => {
        res.status(201).json(added);
        })
        .catch((error) => {
            next({
                statusCode:500,
                errorMessage: "aktor eklerken hata oldu.",
                error,
            });
        });
    }
});




router.delete("/:id", (req,res,next) => {
    const {id} = req.params;

    Aktor.findAktorById(id).then((silinecekAktor) => {
        Aktor.deleteAktor(id).then((deleted) => {
            if(deleted){
                res.status(204).end();
            }
            next({
                statusCode:400,
                errorMessage:"aktor sistemde mevcut değil",
            })
        }).catch((error)=> {
            next({
                statusCode:500,
                errorMessage: "aktor silinirken hata oluştu",
                error,
            });
        });

    }).catch((error)=> {
        next({
            statusCode: 500,
            errorMessage: "aktor bulunurken hata oluştu.",
            error,
        });
    });
    
});

//put ve patch metodları update işlemi yapar. farklarını bil. put hepsi güncellenir. patch istediğin veriyi
router.patch("/:id", (req, res, next) => {
    const {id} = req.params;
    const updatedAktor = req.body;

    if (!updatedAktor.isim){
        next({
            statusCode: 400,
            errorMessage: "aktor ismi boş olamaz."
        });
    } else{
        Aktor.updateAktor(updatedAktor, id).then((updated) => {
            res.status(200).json(updated);
        }).catch((error)=>{
            next({
                statusCode :500,
                errorMessage : "hata oluştu.",
                error,
            });
        });

    }
    
});



router.get("/:id", (req,res) => {
    console.log('req.body', req.body);
    const { id }  =  req.params;
    const aktor = data.find((aktor) => aktor.id === parseInt(id));
    if(aktor) {
        res.status(200).json(aktor);

    } else{
        res.status(404).send("Aradığınız aktor bulunamadı...")
    }
});



module.exports = router;