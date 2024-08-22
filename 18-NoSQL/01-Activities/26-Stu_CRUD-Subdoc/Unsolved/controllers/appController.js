const { Application, User } = require('../models');

module.exports = {
  async getApplications(req, res) {
    try {
      const applications = await Application.find();
      res.json(applications);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleApplication(req, res) {
    try {
      const application = await Application.findOne({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with that ID' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the createApplication method
  // Creates an instance of the Application model
  // ObjectId of new document is added to the applications subdocument within the User model
  async createApplication(req, res) {
    try {
      const application = await Application.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { applications: application._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created, but found no user with that ID',
        })
      }

      res.json('Created the application 🎉');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the updateApplication method
  // Document needing updating is filtered using it's _id
  // $set operator only updates the fields included in the request body
  // Before saving the changes to the database, runValidators option ensures the updated document meets the validations of the applicationSchema 
  // Lastly, new option set to true returns the updated document
  async updateApplication(req, res) {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the delete Application method
  // findOneAndRemove method deletes a single document specified by it's _id
  // User document is updated in order to remove the ObjectId in it's applications subdocument which is still pointing/referecing a deleted application document 
  // $pull operator removes the deleted ObjectId from the applications subdocument
  async deleteApplication(req, res) {
    try {
      const application = await Application.findOneAndRemove({ _id: req.params.applicationId });

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      const user = await User.findOneAndUpdate(
        { applications: req.params.applicationId },
        { $pull: { applications: req.params.applicationId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({
          message: 'Application created but no user with this id!',
        });
      }

      res.json({ message: 'Application successfully deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the addTag method
  // Adds a tag subdocument to an application. The entire body of the tag is added rather than it's ObjectId. 
  async addTag(req, res) {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $addToSet: { tags: req.body } },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // TODO: Add comments to the functionality of the addTag method
  // Removes a tag subdocument from an application.   
  // This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
  async removeTag(req, res) {
    try {
      const application = await Application.findOneAndUpdate(
        { _id: req.params.applicationId },
        { $pull: { tags: { tagId: req.params.tagId } } },
        { runValidators: true, new: true }
      );

      if (!application) {
        return res.status(404).json({ message: 'No application with this id!' });
      }

      res.json(application);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
