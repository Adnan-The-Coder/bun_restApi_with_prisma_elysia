const {PrismaClient} = require('@prisma/client')

const client = new PrismaClient();

const postsToCreate = [
    {
      "id": 1,
      "title": "Post One Title",
      "content": "This is the content of the first post. It gives a brief overview of the topic and introduces the main idea."
    },
    {
      "id": 2,
      "title": "Post Two Title",
      "content": "Content for the second post here. It provides further details on the subject discussed earlier."
    },
    {
      "id": 3,
      "title": "Post Three Title",
      "content": "This is a short description of the third post. It covers additional insights related to the topic."
    },
    {
      "id": 4,
      "title": "Post Four Title",
      "content": "In the fourth post, we explore another angle of the main discussion and offer practical tips."
    }
  ]

  
const seed = async (posts) => {
    console.log("Creating Posts....")
    
    for (let i = 0; i<posts.length; i++){
        console.log("Creating a posts ", posts[i])
        await client.post.upsert(args,{
            where:{id:posts[i].id},
            update: posts[i],
            create: posts[i],
        })
    }
}


seed(postsToCreate)
    .then(()=>{
        console.log("Created/Updated posts successfully.")
    })
    .catch((error)=>{
        console.log("Error",error)
    })
    .finally(()=>{
        client.$disconnect();
        console.log("Disconnecting Prisma client, exitting...")
    })