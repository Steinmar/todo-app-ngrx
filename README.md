# TodosAppNgrx

Is the example for use Angular + Ngrx (Redux). This is using as a starter kit. Original project is clone https://github.com/nicobytes/todo-app-ngrx.git

## Instalation

run ```npm i```

## Usage

For generating actions run one of the scripts:

1.  ```npm run generate-filter-action``` for generating filter actions
2.  ```npm run generate-todo-action``` for generating todo actions
3.  ```npm run generate-all-node``` for generating both filter and todo actions by node script
4.  ```npm run generate-all``` for generating both filter and todo actions from comand line

Warning: all of this scripts will clean generate fodler. So if you run generate filter actions
all revious files will be removed. So if you want to generate actions for both entities please
run scripts #3 or #4.

Attention! By defaul we are using actions from the example above. If you want switch to the
generated actions please go to the next files:

1. ```src/redux/filter/export-filter.actions.ts```
  Comment line 4 and uncomment line 5.
2. ```src/redux/todo/export-todo.actions.ts```
  Comment line 4 and uncomment line 5.

Customization of generated action you can find in the file ```src/redux/todo/todo.actions.ts``` at the line#12.

Action files from examples was renamed with prefix ```.default```.
This is why you can see such files as ```todo.actions.ts``` and ```todo.actions.default.ts```.
