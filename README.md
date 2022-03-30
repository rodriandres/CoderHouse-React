
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Demo

[![StarWars E-commerce demo](https://img.youtube.com/vi/_HIfSbupoqo/0.jpg)](https://www.youtube.com/watch?v=_HIfSbupoqo)

# Requirements

## 1st Step
First of all you have to have a firebase account [Initial steps on Firebase documentation](https://cloud.google.com/firestore/docs/client/get-firebase). 

If you want to learn more about Firebase, check out the [Firebase documentation](https://firebase.google.com/docs?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrUdeLsE-EYqQbywqvV_jvtNGdH7-JEaGxjRsrsWVktj42PZ2TWzpaoaAlr0EALw_wcB&gclsrc=aw.ds).

This Web App was do it with server less, and firebase fulfills its functionality as such as a no-sql backend

## 2nd Step

#### Enviroment variables

You have to create a ".env" file inside of the main directory of the application
which have to have inside the following variables:

- REACT_APP_ApiKey
- REACT_APP_AuthDomain
- REACT_APP_ProjectId
- REACT_APP_StorageBucket
- REACT_APP_MessagingSenderId
- process.env.REACT_APP_AppId 

The value of each variables should be on your firebase data


## 3rd Step

When you already have your firebase connected with your app then you should fill the firebase documents for see the products in the E-commerce

You will have to create a 3 colletions:
- categories
- itemCollection
- orders

#### Fill the fields and value of the document

#### categories:
Here is where the category's name for he poduct and the navBar buttons will stand

| Field | Type | Value |
| ------ | ------ | ------ |
| name | string | The name of the category 1 |
| name | string | The name of the category 2 |
| name | string | The name of the category 3 |

#### itemCollection:
This storage all the items of your shop with their properties

| Field | Type | Value |
| ------ | ------ | ------ |
| name | string | Product name 1 |
| description | string | A description of your product |
| category | string | The same name of one of the categories |
| pictureUrl | string | here you paste the same web link for your product image |
| stock | number | The quantity of the product's stock |
| price | number | the price per unit of the product |

#### orders:
This collection will save all the orders with the buyer and products data
This one you don't need to fill it because it save the data from the bought
And store this data 

```sh
{
    buyer:
        {
            {
                address: string,
                comment: string,
                email: string,
                name: string,
                phone: string
            },
        date: date
        },
    items:
        [
            {
                product:
                {
                    category: string,
                    description: string,
                    id: string,
                    name: string,
                    pictureUrl: string,
                    price: number,
                    stock: number
                },
                quantityToAdd: number,
            },
            total: number
        ]
}

