import express from 'express'
import Items from '../models/Item.js'


const router = express.Router()

router.get('/', async(req, res)=>{
    const Item = await Items.find()
    
    res.json(Item)
    
})

router.post('/submit', async(req, res)=>{
    const submit = new Items(req.body)
    submit.save()
    const Item = await Items.find()
    res.json(Item)
    
})

router.post('/delete', async(req, res)=>{
    await Items.deleteOne(req.body)
    const Item = await Items.find()
    res.json(Item)
    
})

router.post('/check', async(req, res)=>{
    
    try {
        await Items.updateOne({_id: req.body.id}, {$set:{check: req.body.check}})
        
        
        res.send("done")
    } catch (error) {
        console.log("error: "+error);
        
    }
    
})
export default router