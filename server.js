const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));

let posts = [{"author_id":2,"author_name":"Ervin Howell","author_email":"Shanna@melissa.tv","created":1668168560357,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","content":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"author_id":4,"author_name":"Patricia Lebsack","author_email":"Julianne.OConner@kory.org","created":1668168561027,"id":2,"title":"qui est esse","content":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"author_id":3,"author_name":"Clementine Bauch","author_email":"Nathan@yesenia.net","created":1668168562320,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","content":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"author_id":5,"author_name":"Clementina DuBuque","author_email":"Rey.Padberg@karina.biz","created":1668168562699,"id":4,"title":"eum et est occaecati","content":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"author_id":6,"author_name":"Kurtis Weissnat","author_email":"Telly.Hoeger@billy.biz","created":1668168563041,"id":5,"title":"nesciunt quas odio","content":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"},{"author_id":1,"author_name":"Leanne Graham","author_email":"Sincere@april.biz","created":1668168563411,"id":6,"title":"dolorem eum magni eos aperiam quia","content":"ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"}];
let nextId = 11;
let authorId = 20;

const router = new Router();

router.get('/posts', async (ctx, next) => {
    ctx.response.status = 200;
    ctx.response.body = posts;
});

router.post('/posts', async (ctx, next) => {
    const {id, content} = ctx.request.body;

    if (id !== 0) {
        posts = posts.map(o => o.id != id ? o : {...o, content: content});
        ctx.response.status = 204;
		console.log(posts)
        return;
    }
    posts.push({...ctx.request.body, id: nextId++, created: Date.now(), author_id: authorId++ });
    ctx.response.status = 204;
});

router.get('/posts/:id', async (ctx, next) => {
    const postId = Number(ctx.params.id);
    if (postId !== 0) {

        let post = posts.find(o => o.id === postId);
        if (post !== undefined) {
            ctx.response.body = post
            ctx.response.status = 200;
			 return;
        }
    }
    ctx.response.status = 404;
});

router.delete('/posts/:id', async(ctx, next) => {
    const postId = Number(ctx.params.id);
    const index = posts.findIndex(o => o.id === postId);
    if (index !== -1) {
        posts.splice(index, 1);
    }
    ctx.response.status = 204;
});


app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7785;
const server = http.createServer(app.callback());
server.listen(port, () => {
    console.log(`server started http://localhost:${port}`)
});