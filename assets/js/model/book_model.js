//创建书籍模型
var BookModel = Backbone.Model.extend({
    idAttribute:'_id'
})

//创建书籍集合
var BookCollection = Backbone.Collection.extend({
    model:BookModel,
    url:'http://localhost:2900/api/v1/books/',
    getPageSize:function (params,callback){
        $.getJSON(this.url + 'get_page_count',params,function(res){
            console.log(res)
            console.log(res.pageCount)
            console.log(res.data)
               callback(res)
           })
    }
})
module.exports = {Model:BookModel,Collection:BookCollection}
