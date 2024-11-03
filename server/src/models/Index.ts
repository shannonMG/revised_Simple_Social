import User from './User';
import Circle from './Circle';
import CircleUser from './CircleUser';
import Post from './Post';
import Comment from './Comment';

// Many-to-Many relationship between User and Circle via CircleUser
User.belongsToMany(Circle, { through: CircleUser, foreignKey: 'user_id', as: 'Circles' });
Circle.belongsToMany(User, { through: CircleUser, foreignKey: 'circle_id', as: 'Users' });

// One-to-Many relationship between User and Post
// A user can have many posts, but each post belongs to one user
User.hasMany(Post, { foreignKey: 'user_id' });
Post.belongsTo(User, { foreignKey: 'user_id' });

// One-to-Many relationship between Circle and Post
// A circle can have many posts, but each post belongs to one circle
Circle.hasMany(Post, { foreignKey: 'circle_id' });
Post.belongsTo(Circle, { foreignKey: 'circle_id' });

// One-to-Many relationship between Post and Comment
// A post can have many comments, but each comment belongs to one post
Post.hasMany(Comment, { foreignKey: 'commentable_id', constraints: false });
Comment.belongsTo(Post, { foreignKey: 'commentable_id', constraints: false });

// One-to-Many relationship between User and Comment
// A user can have many comments, but each comment belongs to one user
User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });


export { User, Circle, CircleUser, Post, Comment };
