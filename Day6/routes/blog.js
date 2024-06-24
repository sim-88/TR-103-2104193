const express=require('express');
const router=express.Router()

router.get('/',(req,res) => {
  res.send('Blog Home page')
}
)
router.get('/about',(req,res) => {
  res.send('Blog About page')
}
)

module.exports = router