# A web project to adopt pets

You can access here: 
 - https://pets-adoption-with-djangoapi.vercel.app (Main Page)
 - https://pets-adoption-with-djangoapi.vercel.app/pets/register (Admin Page, but you can actually add a pet)
 - Django Rest API is deployed here: gabrielkayque.pythonanywhere.com/api/pets

Web Application built in ReactJS with an API to manage the pets list and pets adoption built in Django(Django Rest framework) and SQL Models in Django

Please, see the branchs separately, The branch main is a mess because of Merge. See below!!

# Problems with GITHUB

I'm a beginner, so the biggest problem I've faced in this project was to merge backend and frontend in one branch. I was even not able to reach what I expected.
I started two differente projects, One for Backend and one for Front. But one thing I didn't notice was that the backend branch was a frontend branch's child. All commits in B.E branch is treated as a behind commit. That was not what I wanted to do, but I was not able to fix it.

What I really wanted to do is to have two separate branches for then merge them into a main with two folders. But I was not able to do it. I believe I had to start the project like that since the beginning.

# Problems with React, Next and TypeScript

The biggest problem with Typescript was how to handle "Throw errors", because the error comes as "any" value, and you have to turn it to a type, before you can do wherever you want.
I didn't have anything hard to solve in react or next, I believe because I was using @mui/material, so a lot of the components was more simple to create and handle.

# Problems with Django

The biggest of all problems was to create an API to return a object inside an object, like Return the id, email and Pet; but PET being an object with all information of the Pet.
I built using Django Rest, but the serializer model was HARD to code. I beliveve I'll revisit what I coded just to use in other projects when needed!
