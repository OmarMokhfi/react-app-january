const POSTS = [
  {
    id: 1,
    slug: "post-1",
    caption: "Enjoying a sunny day at the beach! 🏖️ #SummerVibes",
    image_url: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    slug: "post-2",
    caption: "Exploring new places and making memories. #AdventureTime",
    image_url: "https://example.com/image2.jpg",
  },
  {
    id: 3,
    slug: "post-3",
    caption: "Delicious homemade dinner tonight! 🍲 #Foodie",
    image_url: "https://example.com/image3.jpg",
  },
  {
    id: 4,
    slug: "post-4",
    caption:
      "Chilling with friends and having a great time! 🎉 #FriendshipGoals",
    image_url: "https://example.com/image4.jpg",
  },
];

export function getPosts() {
  return POSTS;
}

export function getPostBySlug(slug) {
  return POSTS.filter((item) => item.slug == slug)[0];
}
