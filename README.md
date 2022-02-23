
### Demo Initial steps :-
Below are the steps to do initial setup :-

Install amplify cli
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL


amplify configure :- create user in your aws account , generate access key id , secret acess key id :- it will crate a amplify profile 
 

npx create-react-app amplify-demo-0
cd amplify-demo-0


amplify init : use the profile u created while doing amplify configure


Now we want to add auth :-
amplify add auth



amplify add api


define schema :-


Earlier we had to create roles , policies for these apis, then configure some api level things .  Provide permissions to  access other aws resources like appsync .  All that can be done from cli . 


amplify push :- creates resourcses 


Further we can add lambdas , storage , topics etc using amplify cli .


 
### FE Setup :-

add packages :-

"@aws-amplify/ui-react": "1.2.4",
"aws-amplify": "^3.3.19",


configure Amplify in index.js using amplify docs , configure Auth , API etc and then start using above client side libraries


### Miscellaneous

We create another env :- using amplify env add 

We can manage resources using CF . 

We can also do gitlab integration with Amplify.

host app via : amplify hosting add



