const { User, Thought } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    addUser: async (parent, args) => {
      // A new user is created and their info is stored in the database
      const user = await User.create(args);
      // Then, the user is logged in and a JWT is created/signed using the users info
      const token = signToken(user);
      // Lasty, an Auth object is returned which consists of the created/signed token and the user's info
      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    login: async (parent, { email, password }) => {
      // A user is looked up using the provided email. We use email to lookup a user as this field is unique.
      const user = await User.findOne({ email });
      // If there is no user with the provided email, an AuthenticationError is returned/thrown stating so
      if (!user) {
        throw AuthenticationError
      }
      // If there is a user found, execute the isCorrectPassword instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);
      // If they do not match, an AuthenticationError is returned stating so
      if (!correctPw) {
        throw AuthenticationError
      }
      // If the email and password are correct, then a JWT is created/signed using the users info
      const token = signToken(user);
      // Lasty, an Auth object is returned which consists of the created/signed token and the user's info
      return { token, user };
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
