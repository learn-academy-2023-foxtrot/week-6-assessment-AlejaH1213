# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AH

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: to fix this mistake you need to do a db:migration to add the column with the foreign key, this foreign key would be assigned to the students and it would be the cohort id number since one cohort has many students but an student only has one cohort. 

Researched answer: to add the column with the foreign key we first need to write a command to generate a migration, this command is "rails generate migration add_column_example" and then inside of the migrations directory when we use "add_column :table_name, :column_name, :datatype" to add a new column, to save those changes we use the "rails db:migrate",the foreign key goes on the student and this is true of all hasmany belongs_to associations. _The foreign key will ALWAYS live on the belongs_to side.

2. Which RESTful routes must always be passed params?

Your answer: edit, delete, show, and update because to do perform any of those actions we need to know on what entry we are perfoming them 

Researched answer: the show RESTful route lists one item in a particular mode, the delete RESTful destroys one item and removes information, the update RESTful route is the right convenction for the edit and update method because update can patch(edit) or put(update)

3. Name three rails generator commands. What is created by each?

Your answer: you can "rails generate model" to create a new model where you would have a new database, you can "rails generate controller" where you can create a new controller for your model and you can "rails generate migration" in case you need to add, modify or delete things from your database.

Researched answer: the "rails generate model" creates a new database table and the corresponding Ruby class, the "rails generate controller" creates a new controller and also the views and actions associated to that controller, the "rails generate migration" is used to make changes in the database schema

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
this will read or be the index, so it will only show general information about all the information in the database

action: "POST" location: /students
this will create and will add information in the database

action: "GET" location: /students/new
this will provided a new form to the user to create a new entry in the database

action: "GET" location: /students/2
this will show an specific item in a database

action: "GET" location: /students/2/edit
this will edit a specific item in the database

action: "PATCH" location: /students/2
this will update a specific entry 

action: "DELETE" location: /students/2
this will destroy a specific item

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

1. as a user I can see a webpage with a  "to-do list" title at the top of the page
2. as a user I can see a box with a button that says "add new task" and when you click the button a new form appears to create a new task with two boxes, one for the name of the task and another one for the description
3. when a new task gets created the task will appear in the to do list box
4. every new task that gets created has a checklist button to the left of it 
5. when the mouse hovers over the checklist button a faint gray checkmark appears and as the button gets clicked the checkmark fully appears and turns green
6. tasks that are checked as completed (with a green checkmark) go to the bottom of the list and the text turns grey
7. as a user I can choose the interface between "only to-do lists" or "to-do lists and calendar"
8. as a user once I choose the "to-do list and calendar" interface a calendar appears to the right side of the screen moving the to-do list to the left 
9. as a user to the right of each task in the to-do list i can see the option to add a deadline date for that task 
10. as a user, once I choose to add a dateline date for a task this task will appear in the calendar 