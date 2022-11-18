// $('li').on('click', () => {
//     let item = $(this).text.replace(/ /g, "-")
//     $ajax({
        
//     })
// })

let data = [{ item: 'loll ipop' }, { item: 'Sweet' }, { item: 'sugar' }]
        /* Todo Render page */
const todo_index = (req, res) => {
    res.render('todocontainer', {data: data}) 
}
        /* Todo Post */
const todo_post = (req, res) => {
    res.redirect('/todo')
    data.push(req.body)
    res.json(data)
}
        /*Todo Delete  */
const todo_delete = (req, res) => {
    data=data.filter((elem) => {
        return elem.item.replace(/ /g, '-') !== req.params.item
   })
    res.json(data)
}

module.exports = {
    todo_index,
    todo_post,
    todo_delete 
} 