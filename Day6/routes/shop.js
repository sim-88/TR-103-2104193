const express=require('express');
const router=express.Router()

router.get('/',(req,res) => {
  res.send('Shopping Home page')
}
)
router.get('/about',(req,res) => {
  res.send('Shopping About page')
}
)

router.get('/shopcategory/:slug',(req,res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
}
)
module.exports = router