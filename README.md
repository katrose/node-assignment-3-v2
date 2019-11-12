# Node Assignment #3 - Create a User

## Notes on Deliverables

### Form Submission

Currently the only error that can be replicated is by using an email address already in use in the database. If running build.js to build the database, then any of the emails in fixtures/subscribers.js can be entered in the form to try to replicate the form error.
  
  ```javascript
  /**
  * subscribers.js
  */
  
  const subscribers = [
    {
      name: 'Katherine',
      email: 'picazo.katherine@gmail.com',
      adult: true
    },

    {
      name: 'Carmina',
      email: 'carminapicazo@hotmail.com',
      adult: false
    }
  ]
  ```
