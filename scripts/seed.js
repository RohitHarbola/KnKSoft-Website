const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb+srv://hackintown:mkDir123%40%23Xm@social-media-cluster.zpynntr.mongodb.net/?retryWrites=true&w=majority&appName=social-media-cluster';

async function seedDatabase() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db('your-database-name'); // Replace with your database name
    const collection = db.collection('blogposts');
    
    // Check if posts already exist
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Already have ${count} blog posts`);
      return;
    }
    
    // Insert sample blog posts
    const posts = [
      {
        id: '1',
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with Next.js 15',
        content: 'Next.js 15 comes with many exciting features...',
        excerpt: 'Learn about the latest features in Next.js 15',
        date: new Date().toISOString(),
        author: 'Admin',
        tags: ['nextjs', 'react', 'web-development'],
        image: '/images/blog/nextjs.jpg'
      },
      {
        id: '2',
        slug: 'mongodb-best-practices',
        title: 'MongoDB Best Practices for 2024',
        content: 'When working with MongoDB in production...',
        excerpt: 'Essential MongoDB best practices for developers',
        date: new Date().toISOString(),
        author: 'Admin',
        tags: ['mongodb', 'database', 'backend'],
        image: '/images/blog/mongodb.jpg'
      },
      {
        id: '3',
        slug: 'building-api-routes',
        title: 'Building API Routes with Next.js',
        content: 'Next.js API routes provide a powerful way...',
        excerpt: 'Learn how to build robust API routes in Next.js',
        date: new Date().toISOString(),
        author: 'Admin',
        tags: ['nextjs', 'api', 'backend'],
        image: '/images/blog/api-routes.jpg'
      }
    ];
    
    const result = await collection.insertMany(posts);
    console.log(`Inserted ${result.insertedCount} blog posts`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();